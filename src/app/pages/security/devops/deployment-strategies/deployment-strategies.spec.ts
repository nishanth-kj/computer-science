import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsDeploymentStrategiesPage } from "./deployment-strategies";

describe("DevopsDeploymentStrategiesPage", () => {
  let component: DevopsDeploymentStrategiesPage;
  let fixture: ComponentFixture<DevopsDeploymentStrategiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsDeploymentStrategiesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsDeploymentStrategiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
