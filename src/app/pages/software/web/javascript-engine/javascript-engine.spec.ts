import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebJavascriptEnginePage } from "./javascript-engine";

describe("WebJavascriptEnginePage", () => {
  let component: WebJavascriptEnginePage;
  let fixture: ComponentFixture<WebJavascriptEnginePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebJavascriptEnginePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebJavascriptEnginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
