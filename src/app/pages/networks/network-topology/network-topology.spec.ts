import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksNetworkTopologyPage } from "./network-topology";

describe("NetworksNetworkTopologyPage", () => {
  let component: NetworksNetworkTopologyPage;
  let fixture: ComponentFixture<NetworksNetworkTopologyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksNetworkTopologyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksNetworkTopologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
