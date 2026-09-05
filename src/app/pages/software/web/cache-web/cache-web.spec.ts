import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebCacheWebPage } from "./cache-web";

describe("WebCacheWebPage", () => {
  let component: WebCacheWebPage;
  let fixture: ComponentFixture<WebCacheWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCacheWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebCacheWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
