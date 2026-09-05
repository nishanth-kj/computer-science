import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxSyscallsLinuxPage } from "./syscalls-linux";

describe("LinuxSyscallsLinuxPage", () => {
  let component: LinuxSyscallsLinuxPage;
  let fixture: ComponentFixture<LinuxSyscallsLinuxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxSyscallsLinuxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxSyscallsLinuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
