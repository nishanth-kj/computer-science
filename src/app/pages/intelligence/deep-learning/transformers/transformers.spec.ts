import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningTransformersPage } from "./transformers";

describe("DeepLearningTransformersPage", () => {
  let component: DeepLearningTransformersPage;
  let fixture: ComponentFixture<DeepLearningTransformersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningTransformersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningTransformersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
