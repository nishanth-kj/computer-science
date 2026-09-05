import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksOspfPage } from "./ospf";

describe("NetworksOspfPage", () => {
  let component: NetworksOspfPage;
  let fixture: ComponentFixture<NetworksOspfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksOspfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksOspfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
