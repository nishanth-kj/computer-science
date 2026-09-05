import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsReferencesPage } from "./references";

describe("FundamentalsReferencesPage", () => {
  let component: FundamentalsReferencesPage;
  let fixture: ComponentFixture<FundamentalsReferencesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsReferencesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsReferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
