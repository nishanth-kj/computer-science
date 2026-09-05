import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL3NetworkPage } from "./l3-network";

describe("NetworksL3NetworkPage", () => {
  let component: NetworksL3NetworkPage;
  let fixture: ComponentFixture<NetworksL3NetworkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL3NetworkPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL3NetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
