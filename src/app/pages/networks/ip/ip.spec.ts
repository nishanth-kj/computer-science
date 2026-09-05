import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksIpPage } from "./ip";

describe("NetworksIpPage", () => {
  let component: NetworksIpPage;
  let fixture: ComponentFixture<NetworksIpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksIpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksIpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
