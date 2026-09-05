import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmFineTuningPage } from "./fine-tuning";

describe("LlmFineTuningPage", () => {
  let component: LlmFineTuningPage;
  let fixture: ComponentFixture<LlmFineTuningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmFineTuningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmFineTuningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
