import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebHtmlPage } from "./html";

describe("WebHtmlPage", () => {
  let component: WebHtmlPage;
  let fixture: ComponentFixture<WebHtmlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHtmlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebHtmlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
