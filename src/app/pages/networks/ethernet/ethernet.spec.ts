import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksEthernetPage } from "./ethernet";

describe("NetworksEthernetPage", () => {
  let component: NetworksEthernetPage;
  let fixture: ComponentFixture<NetworksEthernetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksEthernetPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksEthernetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
