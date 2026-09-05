import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpTokenizationNlpPage } from "./tokenization-nlp";

describe("NlpTokenizationNlpPage", () => {
  let component: NlpTokenizationNlpPage;
  let fixture: ComponentFixture<NlpTokenizationNlpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpTokenizationNlpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpTokenizationNlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
