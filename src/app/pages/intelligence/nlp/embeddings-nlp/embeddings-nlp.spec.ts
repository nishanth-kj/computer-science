import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpEmbeddingsNlpPage } from "./embeddings-nlp";

describe("NlpEmbeddingsNlpPage", () => {
  let component: NlpEmbeddingsNlpPage;
  let fixture: ComponentFixture<NlpEmbeddingsNlpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpEmbeddingsNlpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpEmbeddingsNlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
