import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsDebuggingPage } from "./debugging";

describe("FundamentalsDebuggingPage", () => {
  let component: FundamentalsDebuggingPage;
  let fixture: ComponentFixture<FundamentalsDebuggingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsDebuggingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsDebuggingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
