import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpSearchNlpPage } from "./search-nlp";

describe("NlpSearchNlpPage", () => {
  let component: NlpSearchNlpPage;
  let fixture: ComponentFixture<NlpSearchNlpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpSearchNlpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpSearchNlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
