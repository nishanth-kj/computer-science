import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebAccessibilityPage } from "./accessibility";

describe("WebAccessibilityPage", () => {
  let component: WebAccessibilityPage;
  let fixture: ComponentFixture<WebAccessibilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAccessibilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebAccessibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
