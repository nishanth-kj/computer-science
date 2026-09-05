import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksWifiPage } from "./wifi";

describe("NetworksWifiPage", () => {
  let component: NetworksWifiPage;
  let fixture: ComponentFixture<NetworksWifiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksWifiPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksWifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
