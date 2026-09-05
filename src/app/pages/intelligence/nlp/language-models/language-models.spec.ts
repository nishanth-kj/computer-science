import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpLanguageModelsPage } from "./language-models";

describe("NlpLanguageModelsPage", () => {
  let component: NlpLanguageModelsPage;
  let fixture: ComponentFixture<NlpLanguageModelsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpLanguageModelsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpLanguageModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
