import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NlpTextClassificationPage } from "./text-classification";

describe("NlpTextClassificationPage", () => {
  let component: NlpTextClassificationPage;
  let fixture: ComponentFixture<NlpTextClassificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpTextClassificationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NlpTextClassificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
