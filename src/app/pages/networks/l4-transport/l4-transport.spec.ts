import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL4TransportPage } from "./l4-transport";

describe("NetworksL4TransportPage", () => {
  let component: NetworksL4TransportPage;
  let fixture: ComponentFixture<NetworksL4TransportPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL4TransportPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL4TransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
