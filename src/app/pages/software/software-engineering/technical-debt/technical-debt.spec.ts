import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringTechnicalDebtPage } from "./technical-debt";

describe("SoftwareEngineeringTechnicalDebtPage", () => {
  let component: SoftwareEngineeringTechnicalDebtPage;
  let fixture: ComponentFixture<SoftwareEngineeringTechnicalDebtPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringTechnicalDebtPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringTechnicalDebtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
