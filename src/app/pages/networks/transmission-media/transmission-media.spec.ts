import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksTransmissionMediaPage } from "./transmission-media";

describe("NetworksTransmissionMediaPage", () => {
  let component: NetworksTransmissionMediaPage;
  let fixture: ComponentFixture<NetworksTransmissionMediaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksTransmissionMediaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksTransmissionMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
