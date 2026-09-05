import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksTcpIpModelPage } from "./tcp-ip-model";

describe("NetworksTcpIpModelPage", () => {
  let component: NetworksTcpIpModelPage;
  let fixture: ComponentFixture<NetworksTcpIpModelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksTcpIpModelPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksTcpIpModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
