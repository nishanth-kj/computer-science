import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmEvaluationLlmPage } from "./evaluation-llm";

describe("LlmEvaluationLlmPage", () => {
  let component: LlmEvaluationLlmPage;
  let fixture: ComponentFixture<LlmEvaluationLlmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmEvaluationLlmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmEvaluationLlmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
