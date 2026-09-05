import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmPositionalEncodingPage } from "./positional-encoding";

describe("LlmPositionalEncodingPage", () => {
  let component: LlmPositionalEncodingPage;
  let fixture: ComponentFixture<LlmPositionalEncodingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmPositionalEncodingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmPositionalEncodingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
