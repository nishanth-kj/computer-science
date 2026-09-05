import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsInterpreterPage } from "./interpreter";

describe("FundamentalsInterpreterPage", () => {
  let component: FundamentalsInterpreterPage;
  let fixture: ComponentFixture<FundamentalsInterpreterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsInterpreterPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsInterpreterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
