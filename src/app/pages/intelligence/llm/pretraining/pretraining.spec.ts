import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmPretrainingPage } from "./pretraining";

describe("LlmPretrainingPage", () => {
  let component: LlmPretrainingPage;
  let fixture: ComponentFixture<LlmPretrainingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmPretrainingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmPretrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
