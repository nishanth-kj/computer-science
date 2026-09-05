import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringIntegrationTestingPage } from "./integration-testing";

describe("SoftwareEngineeringIntegrationTestingPage", () => {
  let component: SoftwareEngineeringIntegrationTestingPage;
  let fixture: ComponentFixture<SoftwareEngineeringIntegrationTestingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringIntegrationTestingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringIntegrationTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
