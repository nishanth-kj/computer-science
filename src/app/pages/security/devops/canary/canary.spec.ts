import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsCanaryPage } from "./canary";

describe("DevopsCanaryPage", () => {
  let component: DevopsCanaryPage;
  let fixture: ComponentFixture<DevopsCanaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsCanaryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsCanaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
