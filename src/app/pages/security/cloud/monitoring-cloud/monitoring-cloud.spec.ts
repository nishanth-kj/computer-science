import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudMonitoringCloudPage } from "./monitoring-cloud";

describe("CloudMonitoringCloudPage", () => {
  let component: CloudMonitoringCloudPage;
  let fixture: ComponentFixture<CloudMonitoringCloudPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMonitoringCloudPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudMonitoringCloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
