import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksFirewallPage } from "./firewall";

describe("NetworksFirewallPage", () => {
  let component: NetworksFirewallPage;
  let fixture: ComponentFixture<NetworksFirewallPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksFirewallPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksFirewallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
