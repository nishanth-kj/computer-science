import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { NlpPage } from "./nlp";

describe("NlpPage", () => {
  let component: NlpPage;
  let fixture: ComponentFixture<NlpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
