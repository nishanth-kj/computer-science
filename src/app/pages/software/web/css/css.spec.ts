import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebCssPage } from "./css";

describe("WebCssPage", () => {
  let component: WebCssPage;
  let fixture: ComponentFixture<WebCssPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCssPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
