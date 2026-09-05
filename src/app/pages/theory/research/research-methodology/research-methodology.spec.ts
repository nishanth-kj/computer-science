import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchResearchMethodologyPage } from "./research-methodology";

describe("ResearchResearchMethodologyPage", () => {
  let component: ResearchResearchMethodologyPage;
  let fixture: ComponentFixture<ResearchResearchMethodologyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchResearchMethodologyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchResearchMethodologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
