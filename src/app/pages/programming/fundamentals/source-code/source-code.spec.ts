import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsSourceCodePage } from "./source-code";

describe("FundamentalsSourceCodePage", () => {
  let component: FundamentalsSourceCodePage;
  let fixture: ComponentFixture<FundamentalsSourceCodePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsSourceCodePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsSourceCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
