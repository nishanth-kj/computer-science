import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { LlmPage } from "./llm";

describe("LlmPage", () => {
  let component: LlmPage;
  let fixture: ComponentFixture<LlmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
