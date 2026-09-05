import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsIacPage } from "./iac";

describe("DevopsIacPage", () => {
  let component: DevopsIacPage;
  let fixture: ComponentFixture<DevopsIacPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsIacPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsIacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
