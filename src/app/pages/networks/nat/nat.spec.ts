import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksNatPage } from "./nat";

describe("NetworksNatPage", () => {
  let component: NetworksNatPage;
  let fixture: ComponentFixture<NetworksNatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksNatPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksNatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
