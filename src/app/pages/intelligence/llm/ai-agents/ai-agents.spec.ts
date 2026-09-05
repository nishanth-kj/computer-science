import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmAiAgentsPage } from "./ai-agents";

describe("LlmAiAgentsPage", () => {
  let component: LlmAiAgentsPage;
  let fixture: ComponentFixture<LlmAiAgentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmAiAgentsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmAiAgentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
