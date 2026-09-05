import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchLiteratureReviewPage } from "./literature-review";

describe("ResearchLiteratureReviewPage", () => {
  let component: ResearchLiteratureReviewPage;
  let fixture: ComponentFixture<ResearchLiteratureReviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchLiteratureReviewPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchLiteratureReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
