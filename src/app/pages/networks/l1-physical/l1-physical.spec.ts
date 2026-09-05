import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL1PhysicalPage } from "./l1-physical";

describe("NetworksL1PhysicalPage", () => {
  let component: NetworksL1PhysicalPage;
  let fixture: ComponentFixture<NetworksL1PhysicalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL1PhysicalPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL1PhysicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
