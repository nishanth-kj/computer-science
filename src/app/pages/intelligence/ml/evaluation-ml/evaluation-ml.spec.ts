import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlEvaluationMlPage } from "./evaluation-ml";

describe("MlEvaluationMlPage", () => {
  let component: MlEvaluationMlPage;
  let fixture: ComponentFixture<MlEvaluationMlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlEvaluationMlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlEvaluationMlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
