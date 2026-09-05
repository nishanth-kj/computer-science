import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsBlueGreenPage } from "./blue-green";

describe("DevopsBlueGreenPage", () => {
  let component: DevopsBlueGreenPage;
  let fixture: ComponentFixture<DevopsBlueGreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsBlueGreenPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsBlueGreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
