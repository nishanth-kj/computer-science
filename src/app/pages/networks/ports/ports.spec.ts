import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksPortsPage } from "./ports";

describe("NetworksPortsPage", () => {
  let component: NetworksPortsPage;
  let fixture: ComponentFixture<NetworksPortsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksPortsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksPortsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
