import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsKubernetesPage } from "./kubernetes";

describe("DevopsKubernetesPage", () => {
  let component: DevopsKubernetesPage;
  let fixture: ComponentFixture<DevopsKubernetesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsKubernetesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsKubernetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
