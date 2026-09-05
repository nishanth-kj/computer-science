import { Injectable, inject, DOCUMENT } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_THEME_COLOR,
  describePath,
  type SeoPage,
} from "@/lib/seo";

@Injectable({ providedIn: "root" })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(rawUrl: string, pageTitle: string) {
    const path = normalizePath(rawUrl);
    const seo = describePath(path);
    const canonical = this.abs(path);
    const image = this.abs(SITE_IMAGE);
    const ogType = seo.kind === "article" ? "article" : "website";

    this.title.setTitle(pageTitle);
    this.setMeta("description", seo.description);
    this.setMeta("robots", seo.robots);
    this.setMeta("author", SITE_NAME);
    this.setMeta("application-name", SITE_NAME);
    this.setMeta("theme-color", SITE_THEME_COLOR);
    this.setMeta("keywords", seo.keywords.join(", "));

    this.setProperty("og:site_name", SITE_NAME);
    this.setProperty("og:locale", SITE_LOCALE);
    this.setProperty("og:type", ogType);
    this.setProperty("og:title", pageTitle);
    this.setProperty("og:description", seo.description);
    this.setProperty("og:url", canonical);
    this.setProperty("og:image", image);
    this.setProperty("og:image:alt", `${SITE_NAME} — ${SITE_DESCRIPTION}`);

    this.setMeta("twitter:card", "summary_large_image");
    this.setMeta("twitter:title", pageTitle);
    this.setMeta("twitter:description", seo.description);
    this.setMeta("twitter:image", image);

    this.setLink("canonical", canonical);
    this.setJsonLd(this.graph(pageTitle, canonical, image, seo));
  }

  private abs(path: string) {
    return new URL(path, this.document.baseURI).href;
  }

  private setMeta(name: string, content: string) {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string) {
    this.meta.updateTag({ property, content });
  }

  private setLink(rel: string, href: string) {
    let el = this.document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
      el = this.document.createElement("link");
      el.setAttribute("rel", rel);
      this.document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  private setJsonLd(data: unknown) {
    let el = this.document.getElementById("ld-json");
    if (!el) {
      el = this.document.createElement("script");
      el.id = "ld-json";
      el.setAttribute("type", "application/ld+json");
      this.document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  private graph(title: string, canonical: string, image: string, seo: SeoPage) {
    const publisher = {
      "@type": "Organization",
      name: SITE_NAME,
      url: this.abs("/"),
      logo: { "@type": "ImageObject", url: this.abs("/logo.svg") },
    };
    const website = {
      "@type": "WebSite",
      name: SITE_NAME,
      url: this.abs("/"),
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher,
      potentialAction: {
        "@type": "SearchAction",
        target: `${this.abs("/library")}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
    const breadcrumbs = {
      "@type": "BreadcrumbList",
      itemListElement: seo.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: this.abs(crumb.path),
      })),
    };
    const page =
      seo.kind === "article"
        ? {
            "@type": "TechArticle",
            headline: title,
            description: seo.description,
            url: canonical,
            image,
            inLanguage: "en",
            author: publisher,
            publisher,
            isPartOf: website,
          }
        : {
            "@type": seo.kind === "collection" ? "CollectionPage" : "WebPage",
            name: title,
            description: seo.description,
            url: canonical,
            image,
            inLanguage: "en",
            isPartOf: website,
          };
    return { "@context": "https://schema.org", "@graph": [website, page, breadcrumbs] };
  }
}

@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot) {
    const built = this.buildTitle(snapshot)?.trim();
    const title = built || `${SITE_NAME} — ${SITE_DESCRIPTION.split(" — ")[0]}`;
    this.seo.apply(snapshot.url, title);
  }
}

function normalizePath(raw: string) {
  const path = raw.split("?")[0].split("#")[0];
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}
