import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmRlhfPage } from "./rlhf";

describe("LlmRlhfPage", () => {
  let component: LlmRlhfPage;
  let fixture: ComponentFixture<LlmRlhfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmRlhfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmRlhfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
