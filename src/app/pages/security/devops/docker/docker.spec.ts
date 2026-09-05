import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsDockerPage } from "./docker";

describe("DevopsDockerPage", () => {
  let component: DevopsDockerPage;
  let fixture: ComponentFixture<DevopsDockerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsDockerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsDockerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
