import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxShellPage } from "./shell";

describe("LinuxShellPage", () => {
  let component: LinuxShellPage;
  let fixture: ComponentFixture<LinuxShellPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxShellPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxShellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
