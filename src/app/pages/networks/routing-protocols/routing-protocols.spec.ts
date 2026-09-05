import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksRoutingProtocolsPage } from "./routing-protocols";

describe("NetworksRoutingProtocolsPage", () => {
  let component: NetworksRoutingProtocolsPage;
  let fixture: ComponentFixture<NetworksRoutingProtocolsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksRoutingProtocolsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksRoutingProtocolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
