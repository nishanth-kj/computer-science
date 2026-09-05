import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsCompilerPage } from "./compiler";

describe("FundamentalsCompilerPage", () => {
  let component: FundamentalsCompilerPage;
  let fixture: ComponentFixture<FundamentalsCompilerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsCompilerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsCompilerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
