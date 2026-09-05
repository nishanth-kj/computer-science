import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxLinuxThreadsPage } from "./linux-threads";

describe("LinuxLinuxThreadsPage", () => {
  let component: LinuxLinuxThreadsPage;
  let fixture: ComponentFixture<LinuxLinuxThreadsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxLinuxThreadsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxLinuxThreadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
