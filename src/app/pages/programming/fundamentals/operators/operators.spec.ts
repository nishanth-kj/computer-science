import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsOperatorsPage } from "./operators";

describe("FundamentalsOperatorsPage", () => {
  let component: FundamentalsOperatorsPage;
  let fixture: ComponentFixture<FundamentalsOperatorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsOperatorsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsOperatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
