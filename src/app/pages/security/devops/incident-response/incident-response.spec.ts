import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsIncidentResponsePage } from "./incident-response";

describe("DevopsIncidentResponsePage", () => {
  let component: DevopsIncidentResponsePage;
  let fixture: ComponentFixture<DevopsIncidentResponsePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsIncidentResponsePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsIncidentResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
