import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksIcmpPage } from "./icmp";

describe("NetworksIcmpPage", () => {
  let component: NetworksIcmpPage;
  let fixture: ComponentFixture<NetworksIcmpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksIcmpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksIcmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
