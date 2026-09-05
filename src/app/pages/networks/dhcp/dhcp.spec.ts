import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksDhcpPage } from "./dhcp";

describe("NetworksDhcpPage", () => {
  let component: NetworksDhcpPage;
  let fixture: ComponentFixture<NetworksDhcpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksDhcpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksDhcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
