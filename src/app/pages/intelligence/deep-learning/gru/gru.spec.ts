import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DeepLearningGruPage } from "./gru";

describe("DeepLearningGruPage", () => {
  let component: DeepLearningGruPage;
  let fixture: ComponentFixture<DeepLearningGruPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningGruPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DeepLearningGruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
