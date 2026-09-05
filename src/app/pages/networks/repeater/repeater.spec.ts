import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksRepeaterPage } from "./repeater";

describe("NetworksRepeaterPage", () => {
  let component: NetworksRepeaterPage;
  let fixture: ComponentFixture<NetworksRepeaterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksRepeaterPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksRepeaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
