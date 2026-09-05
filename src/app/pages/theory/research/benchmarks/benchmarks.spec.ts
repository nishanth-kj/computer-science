import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchBenchmarksPage } from "./benchmarks";

describe("ResearchBenchmarksPage", () => {
  let component: ResearchBenchmarksPage;
  let fixture: ComponentFixture<ResearchBenchmarksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchBenchmarksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchBenchmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
