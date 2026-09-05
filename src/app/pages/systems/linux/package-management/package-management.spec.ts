import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxPackageManagementPage } from "./package-management";

describe("LinuxPackageManagementPage", () => {
  let component: LinuxPackageManagementPage;
  let fixture: ComponentFixture<LinuxPackageManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxPackageManagementPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxPackageManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
