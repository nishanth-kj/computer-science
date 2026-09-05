import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpTextProcessingPage } from "./text-processing";

describe("NlpTextProcessingPage", () => {
  let component: NlpTextProcessingPage;
  let fixture: ComponentFixture<NlpTextProcessingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpTextProcessingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpTextProcessingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
