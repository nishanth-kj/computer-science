import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsErrorHandlingPage } from "./error-handling";

describe("FundamentalsErrorHandlingPage", () => {
  let component: FundamentalsErrorHandlingPage;
  let fixture: ComponentFixture<FundamentalsErrorHandlingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsErrorHandlingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsErrorHandlingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
