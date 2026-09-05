import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxSignalsLinuxPage } from "./signals-linux";

describe("LinuxSignalsLinuxPage", () => {
  let component: LinuxSignalsLinuxPage;
  let fixture: ComponentFixture<LinuxSignalsLinuxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxSignalsLinuxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxSignalsLinuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
