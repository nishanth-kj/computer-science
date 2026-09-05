import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsLoaderPage } from "./loader";

describe("FundamentalsLoaderPage", () => {
  let component: FundamentalsLoaderPage;
  let fixture: ComponentFixture<FundamentalsLoaderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsLoaderPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsLoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
