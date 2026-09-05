import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksOsiVsTcpipPage } from "./osi-vs-tcpip";

describe("NetworksOsiVsTcpipPage", () => {
  let component: NetworksOsiVsTcpipPage;
  let fixture: ComponentFixture<NetworksOsiVsTcpipPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksOsiVsTcpipPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksOsiVsTcpipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
