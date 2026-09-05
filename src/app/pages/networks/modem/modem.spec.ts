import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksModemPage } from "./modem";

describe("NetworksModemPage", () => {
  let component: NetworksModemPage;
  let fixture: ComponentFixture<NetworksModemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksModemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksModemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
