import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningLstmPage } from "./lstm";

describe("DeepLearningLstmPage", () => {
  let component: DeepLearningLstmPage;
  let fixture: ComponentFixture<DeepLearningLstmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningLstmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningLstmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
