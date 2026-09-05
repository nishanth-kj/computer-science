import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsConditionsPage } from "./conditions";

describe("FundamentalsConditionsPage", () => {
  let component: FundamentalsConditionsPage;
  let fixture: ComponentFixture<FundamentalsConditionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsConditionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
