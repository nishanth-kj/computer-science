import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmEmbeddingsPage } from "./embeddings";

describe("LlmEmbeddingsPage", () => {
  let component: LlmEmbeddingsPage;
  let fixture: ComponentFixture<LlmEmbeddingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmEmbeddingsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmEmbeddingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
