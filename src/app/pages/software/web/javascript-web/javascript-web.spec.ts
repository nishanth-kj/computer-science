import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebJavascriptWebPage } from "./javascript-web";

describe("WebJavascriptWebPage", () => {
  let component: WebJavascriptWebPage;
  let fixture: ComponentFixture<WebJavascriptWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebJavascriptWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebJavascriptWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
