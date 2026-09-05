import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksUdpPage } from "./udp";

describe("NetworksUdpPage", () => {
  let component: NetworksUdpPage;
  let fixture: ComponentFixture<NetworksUdpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksUdpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksUdpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
