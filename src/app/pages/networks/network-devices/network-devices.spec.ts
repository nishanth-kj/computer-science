import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksNetworkDevicesPage } from "./network-devices";

describe("NetworksNetworkDevicesPage", () => {
  let component: NetworksNetworkDevicesPage;
  let fixture: ComponentFixture<NetworksNetworkDevicesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksNetworkDevicesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksNetworkDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
