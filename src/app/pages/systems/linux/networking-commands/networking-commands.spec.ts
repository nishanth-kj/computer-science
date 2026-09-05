import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxNetworkingCommandsPage } from "./networking-commands";

describe("LinuxNetworkingCommandsPage", () => {
  let component: LinuxNetworkingCommandsPage;
  let fixture: ComponentFixture<LinuxNetworkingCommandsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxNetworkingCommandsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxNetworkingCommandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
