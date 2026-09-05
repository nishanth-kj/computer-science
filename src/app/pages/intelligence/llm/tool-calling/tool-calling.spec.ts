import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmToolCallingPage } from "./tool-calling";

describe("LlmToolCallingPage", () => {
  let component: LlmToolCallingPage;
  let fixture: ComponentFixture<LlmToolCallingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmToolCallingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmToolCallingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
