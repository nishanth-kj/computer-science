import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsModulesPage } from "./modules";

describe("FundamentalsModulesPage", () => {
  let component: FundamentalsModulesPage;
  let fixture: ComponentFixture<FundamentalsModulesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsModulesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
