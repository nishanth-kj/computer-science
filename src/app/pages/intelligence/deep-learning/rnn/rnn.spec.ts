import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningRnnPage } from "./rnn";

describe("DeepLearningRnnPage", () => {
  let component: DeepLearningRnnPage;
  let fixture: ComponentFixture<DeepLearningRnnPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningRnnPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningRnnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
