import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksHubPage } from "./hub";

describe("NetworksHubPage", () => {
  let component: NetworksHubPage;
  let fixture: ComponentFixture<NetworksHubPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksHubPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksHubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
