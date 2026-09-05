import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebCookiesPage } from "./cookies";

describe("WebCookiesPage", () => {
  let component: WebCookiesPage;
  let fixture: ComponentFixture<WebCookiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCookiesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebCookiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
