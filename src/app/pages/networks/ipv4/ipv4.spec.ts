import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksIpv4Page } from "./ipv4";

describe("NetworksIpv4Page", () => {
  let component: NetworksIpv4Page;
  let fixture: ComponentFixture<NetworksIpv4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksIpv4Page],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksIpv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
