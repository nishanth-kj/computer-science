import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersSemanticAnalysisPage } from "./semantic-analysis";

describe("CompilersSemanticAnalysisPage", () => {
  let component: CompilersSemanticAnalysisPage;
  let fixture: ComponentFixture<CompilersSemanticAnalysisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersSemanticAnalysisPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersSemanticAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
