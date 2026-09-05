import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmInferencePage } from "./inference";

describe("LlmInferencePage", () => {
  let component: LlmInferencePage;
  let fixture: ComponentFixture<LlmInferencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmInferencePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmInferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
