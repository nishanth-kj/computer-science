import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsExceptionsPage } from "./exceptions";

describe("FundamentalsExceptionsPage", () => {
  let component: FundamentalsExceptionsPage;
  let fixture: ComponentFixture<FundamentalsExceptionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsExceptionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsExceptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
