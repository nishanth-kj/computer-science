import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningAttentionPage } from "./attention";

describe("DeepLearningAttentionPage", () => {
  let component: DeepLearningAttentionPage;
  let fixture: ComponentFixture<DeepLearningAttentionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningAttentionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningAttentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
