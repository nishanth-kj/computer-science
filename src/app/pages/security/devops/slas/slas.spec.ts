import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsSlasPage } from "./slas";

describe("DevopsSlasPage", () => {
  let component: DevopsSlasPage;
  let fixture: ComponentFixture<DevopsSlasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsSlasPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsSlasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
