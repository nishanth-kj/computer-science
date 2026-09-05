import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxBashLinuxPage } from "./bash-linux";

describe("LinuxBashLinuxPage", () => {
  let component: LinuxBashLinuxPage;
  let fixture: ComponentFixture<LinuxBashLinuxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxBashLinuxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxBashLinuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
