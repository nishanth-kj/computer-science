import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AffiliateDisclosurePage } from "./affiliate-disclosure";

describe("AffiliateDisclosurePage", () => {
  let component: AffiliateDisclosurePage;
  let fixture: ComponentFixture<AffiliateDisclosurePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliateDisclosurePage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(AffiliateDisclosurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
