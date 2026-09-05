import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmTokenizationPage } from "./tokenization";

describe("LlmTokenizationPage", () => {
  let component: LlmTokenizationPage;
  let fixture: ComponentFixture<LlmTokenizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmTokenizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmTokenizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
