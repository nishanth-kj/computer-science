import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningNeuralNetworksPage } from "./neural-networks";

describe("DeepLearningNeuralNetworksPage", () => {
  let component: DeepLearningNeuralNetworksPage;
  let fixture: ComponentFixture<DeepLearningNeuralNetworksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningNeuralNetworksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningNeuralNetworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
