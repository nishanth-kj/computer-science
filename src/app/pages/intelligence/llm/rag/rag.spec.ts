import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmRagPage } from "./rag";

describe("LlmRagPage", () => {
  let component: LlmRagPage;
  let fixture: ComponentFixture<LlmRagPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmRagPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmRagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
