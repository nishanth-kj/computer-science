import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringObservabilityPage } from "./observability";

describe("SoftwareEngineeringObservabilityPage", () => {
  let component: SoftwareEngineeringObservabilityPage;
  let fixture: ComponentFixture<SoftwareEngineeringObservabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringObservabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringObservabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
