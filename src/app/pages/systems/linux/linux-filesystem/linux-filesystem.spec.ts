import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxLinuxFilesystemPage } from "./linux-filesystem";

describe("LinuxLinuxFilesystemPage", () => {
  let component: LinuxLinuxFilesystemPage;
  let fixture: ComponentFixture<LinuxLinuxFilesystemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxLinuxFilesystemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxLinuxFilesystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
