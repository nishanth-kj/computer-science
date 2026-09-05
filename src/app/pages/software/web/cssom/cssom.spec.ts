import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebCssomPage } from "./cssom";

describe("WebCssomPage", () => {
  let component: WebCssomPage;
  let fixture: ComponentFixture<WebCssomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCssomPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebCssomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
