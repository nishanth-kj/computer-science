import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsDataTypesPage } from "./data-types";

describe("FundamentalsDataTypesPage", () => {
  let component: FundamentalsDataTypesPage;
  let fixture: ComponentFixture<FundamentalsDataTypesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsDataTypesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsDataTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
