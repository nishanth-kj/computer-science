import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL2DataLinkPage } from "./l2-data-link";

describe("NetworksL2DataLinkPage", () => {
  let component: NetworksL2DataLinkPage;
  let fixture: ComponentFixture<NetworksL2DataLinkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL2DataLinkPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL2DataLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
