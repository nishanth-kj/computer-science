import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksGatewayPage } from "./gateway";

describe("NetworksGatewayPage", () => {
  let component: NetworksGatewayPage;
  let fixture: ComponentFixture<NetworksGatewayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksGatewayPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksGatewayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
