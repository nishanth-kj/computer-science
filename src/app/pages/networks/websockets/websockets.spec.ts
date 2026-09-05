import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksWebsocketsPage } from "./websockets";

describe("NetworksWebsocketsPage", () => {
  let component: NetworksWebsocketsPage;
  let fixture: ComponentFixture<NetworksWebsocketsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksWebsocketsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksWebsocketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
