import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksMacAddressesPage } from "./mac-addresses";

describe("NetworksMacAddressesPage", () => {
  let component: NetworksMacAddressesPage;
  let fixture: ComponentFixture<NetworksMacAddressesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksMacAddressesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksMacAddressesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
