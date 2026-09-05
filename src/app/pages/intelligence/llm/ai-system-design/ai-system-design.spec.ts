import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmAiSystemDesignPage } from "./ai-system-design";

describe("LlmAiSystemDesignPage", () => {
  let component: LlmAiSystemDesignPage;
  let fixture: ComponentFixture<LlmAiSystemDesignPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmAiSystemDesignPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmAiSystemDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
