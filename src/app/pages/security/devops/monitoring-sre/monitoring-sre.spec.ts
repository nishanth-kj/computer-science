import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsMonitoringSrePage } from "./monitoring-sre";

describe("DevopsMonitoringSrePage", () => {
  let component: DevopsMonitoringSrePage;
  let fixture: ComponentFixture<DevopsMonitoringSrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsMonitoringSrePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsMonitoringSrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
