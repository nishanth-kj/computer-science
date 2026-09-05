import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksArpPage } from "./arp";

describe("NetworksArpPage", () => {
  let component: NetworksArpPage;
  let fixture: ComponentFixture<NetworksArpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksArpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksArpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
