import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksIpv6Page } from "./ipv6";

describe("NetworksIpv6Page", () => {
  let component: NetworksIpv6Page;
  let fixture: ComponentFixture<NetworksIpv6Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksIpv6Page],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksIpv6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
