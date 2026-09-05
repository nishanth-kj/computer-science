import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxPermissionsPage } from "./permissions";

describe("LinuxPermissionsPage", () => {
  let component: LinuxPermissionsPage;
  let fixture: ComponentFixture<LinuxPermissionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxPermissionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxPermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
