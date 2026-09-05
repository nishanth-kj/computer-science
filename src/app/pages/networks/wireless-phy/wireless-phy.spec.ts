import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksWirelessPhyPage } from "./wireless-phy";

describe("NetworksWirelessPhyPage", () => {
  let component: NetworksWirelessPhyPage;
  let fixture: ComponentFixture<NetworksWirelessPhyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksWirelessPhyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksWirelessPhyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
