import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsVariablesPage } from "./variables";

describe("FundamentalsVariablesPage", () => {
  let component: FundamentalsVariablesPage;
  let fixture: ComponentFixture<FundamentalsVariablesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsVariablesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsVariablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
