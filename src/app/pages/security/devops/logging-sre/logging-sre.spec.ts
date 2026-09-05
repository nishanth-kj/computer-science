import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsLoggingSrePage } from "./logging-sre";

describe("DevopsLoggingSrePage", () => {
  let component: DevopsLoggingSrePage;
  let fixture: ComponentFixture<DevopsLoggingSrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsLoggingSrePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsLoggingSrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
