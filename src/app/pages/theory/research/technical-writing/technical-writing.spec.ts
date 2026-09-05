import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchTechnicalWritingPage } from "./technical-writing";

describe("ResearchTechnicalWritingPage", () => {
  let component: ResearchTechnicalWritingPage;
  let fixture: ComponentFixture<ResearchTechnicalWritingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchTechnicalWritingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchTechnicalWritingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
