import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksWhatIsNetworkingPage } from "./what-is-networking";

describe("NetworksWhatIsNetworkingPage", () => {
  let component: NetworksWhatIsNetworkingPage;
  let fixture: ComponentFixture<NetworksWhatIsNetworkingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksWhatIsNetworkingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksWhatIsNetworkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
