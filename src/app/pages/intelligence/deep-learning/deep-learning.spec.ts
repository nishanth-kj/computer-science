import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningPage } from "./deep-learning";

describe("DeepLearningPage", () => {
  let component: DeepLearningPage;
  let fixture: ComponentFixture<DeepLearningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
