import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxEnvVarsPage } from "./env-vars";

describe("LinuxEnvVarsPage", () => {
  let component: LinuxEnvVarsPage;
  let fixture: ComponentFixture<LinuxEnvVarsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxEnvVarsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxEnvVarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
