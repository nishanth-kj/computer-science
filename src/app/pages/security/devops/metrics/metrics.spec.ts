import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsMetricsPage } from "./metrics";

describe("DevopsMetricsPage", () => {
  let component: DevopsMetricsPage;
  let fixture: ComponentFixture<DevopsMetricsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsMetricsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsMetricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
