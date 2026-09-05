import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsLibrariesPage } from "./libraries";

describe("FundamentalsLibrariesPage", () => {
  let component: FundamentalsLibrariesPage;
  let fixture: ComponentFixture<FundamentalsLibrariesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsLibrariesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsLibrariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
