import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringRequirementsPage } from "./requirements";

describe("SoftwareEngineeringRequirementsPage", () => {
  let component: SoftwareEngineeringRequirementsPage;
  let fixture: ComponentFixture<SoftwareEngineeringRequirementsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringRequirementsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringRequirementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
