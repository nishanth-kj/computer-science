import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchResearchAreasPage } from "./research-areas";

describe("ResearchResearchAreasPage", () => {
  let component: ResearchResearchAreasPage;
  let fixture: ComponentFixture<ResearchResearchAreasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchResearchAreasPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchResearchAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
