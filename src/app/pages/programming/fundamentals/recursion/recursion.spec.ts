import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsRecursionPage } from "./recursion";

describe("FundamentalsRecursionPage", () => {
  let component: FundamentalsRecursionPage;
  let fixture: ComponentFixture<FundamentalsRecursionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsRecursionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsRecursionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
