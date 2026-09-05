import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningBackpropagationPage } from "./backpropagation";

describe("DeepLearningBackpropagationPage", () => {
  let component: DeepLearningBackpropagationPage;
  let fixture: ComponentFixture<DeepLearningBackpropagationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningBackpropagationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningBackpropagationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
