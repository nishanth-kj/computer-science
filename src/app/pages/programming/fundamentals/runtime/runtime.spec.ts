import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsRuntimePage } from "./runtime";

describe("FundamentalsRuntimePage", () => {
  let component: FundamentalsRuntimePage;
  let fixture: ComponentFixture<FundamentalsRuntimePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsRuntimePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsRuntimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
