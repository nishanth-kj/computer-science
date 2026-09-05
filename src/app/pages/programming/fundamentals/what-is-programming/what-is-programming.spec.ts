import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsWhatIsProgrammingPage } from "./what-is-programming";

describe("FundamentalsWhatIsProgrammingPage", () => {
  let component: FundamentalsWhatIsProgrammingPage;
  let fixture: ComponentFixture<FundamentalsWhatIsProgrammingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsWhatIsProgrammingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsWhatIsProgrammingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
