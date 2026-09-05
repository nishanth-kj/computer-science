import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiProbabilisticAiPage } from "./probabilistic-ai";

describe("AiProbabilisticAiPage", () => {
  let component: AiProbabilisticAiPage;
  let fixture: ComponentFixture<AiProbabilisticAiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiProbabilisticAiPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiProbabilisticAiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
