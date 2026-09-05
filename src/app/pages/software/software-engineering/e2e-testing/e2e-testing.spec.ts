import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringE2eTestingPage } from "./e2e-testing";

describe("SoftwareEngineeringE2eTestingPage", () => {
  let component: SoftwareEngineeringE2eTestingPage;
  let fixture: ComponentFixture<SoftwareEngineeringE2eTestingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringE2eTestingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringE2eTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
