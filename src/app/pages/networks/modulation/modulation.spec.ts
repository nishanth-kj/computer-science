import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksModulationPage } from "./modulation";

describe("NetworksModulationPage", () => {
  let component: NetworksModulationPage;
  let fixture: ComponentFixture<NetworksModulationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksModulationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksModulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
