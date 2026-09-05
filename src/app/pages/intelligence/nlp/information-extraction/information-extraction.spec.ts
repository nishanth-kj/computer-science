import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpInformationExtractionPage } from "./information-extraction";

describe("NlpInformationExtractionPage", () => {
  let component: NlpInformationExtractionPage;
  let fixture: ComponentFixture<NlpInformationExtractionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpInformationExtractionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpInformationExtractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
