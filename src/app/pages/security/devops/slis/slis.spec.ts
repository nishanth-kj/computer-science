import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsSlisPage } from "./slis";

describe("DevopsSlisPage", () => {
  let component: DevopsSlisPage;
  let fixture: ComponentFixture<DevopsSlisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsSlisPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsSlisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
