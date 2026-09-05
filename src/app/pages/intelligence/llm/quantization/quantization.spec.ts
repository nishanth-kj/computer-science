import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmQuantizationPage } from "./quantization";

describe("LlmQuantizationPage", () => {
  let component: LlmQuantizationPage;
  let fixture: ComponentFixture<LlmQuantizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmQuantizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmQuantizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
