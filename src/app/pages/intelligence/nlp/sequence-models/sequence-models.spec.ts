import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpSequenceModelsPage } from "./sequence-models";

describe("NlpSequenceModelsPage", () => {
  let component: NlpSequenceModelsPage;
  let fixture: ComponentFixture<NlpSequenceModelsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpSequenceModelsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpSequenceModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
