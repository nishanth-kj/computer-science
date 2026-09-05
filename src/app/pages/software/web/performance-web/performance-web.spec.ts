import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebPerformanceWebPage } from "./performance-web";

describe("WebPerformanceWebPage", () => {
  let component: WebPerformanceWebPage;
  let fixture: ComponentFixture<WebPerformanceWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPerformanceWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebPerformanceWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
