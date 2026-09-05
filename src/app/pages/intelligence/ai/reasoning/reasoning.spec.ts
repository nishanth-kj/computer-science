import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiReasoningPage } from "./reasoning";

describe("AiReasoningPage", () => {
  let component: AiReasoningPage;
  let fixture: ComponentFixture<AiReasoningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiReasoningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiReasoningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
