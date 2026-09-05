import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsApisPage } from "./apis";

describe("FundamentalsApisPage", () => {
  let component: FundamentalsApisPage;
  let fixture: ComponentFixture<FundamentalsApisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsApisPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsApisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
