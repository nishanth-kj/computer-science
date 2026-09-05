import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSubnettingPage } from "./subnetting";

describe("NetworksSubnettingPage", () => {
  let component: NetworksSubnettingPage;
  let fixture: ComponentFixture<NetworksSubnettingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSubnettingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSubnettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
