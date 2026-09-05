import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsReliabilitySrePage } from "./reliability-sre";

describe("DevopsReliabilitySrePage", () => {
  let component: DevopsReliabilitySrePage;
  let fixture: ComponentFixture<DevopsReliabilitySrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsReliabilitySrePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsReliabilitySrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
