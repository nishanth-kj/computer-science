import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsPage } from "./fundamentals";

describe("FundamentalsPage", () => {
  let component: FundamentalsPage;
  let fixture: ComponentFixture<FundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
