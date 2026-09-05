import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksVlanPage } from "./vlan";

describe("NetworksVlanPage", () => {
  let component: NetworksVlanPage;
  let fixture: ComponentFixture<NetworksVlanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksVlanPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksVlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
