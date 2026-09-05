import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxLinuxProcessesPage } from "./linux-processes";

describe("LinuxLinuxProcessesPage", () => {
  let component: LinuxLinuxProcessesPage;
  let fixture: ComponentFixture<LinuxLinuxProcessesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxLinuxProcessesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxLinuxProcessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
