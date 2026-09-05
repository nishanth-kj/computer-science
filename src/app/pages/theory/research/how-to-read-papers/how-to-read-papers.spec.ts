import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchHowToReadPapersPage } from "./how-to-read-papers";

describe("ResearchHowToReadPapersPage", () => {
  let component: ResearchHowToReadPapersPage;
  let fixture: ComponentFixture<ResearchHowToReadPapersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchHowToReadPapersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchHowToReadPapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
