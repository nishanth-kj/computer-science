import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksStpPage } from "./stp";

describe("NetworksStpPage", () => {
  let component: NetworksStpPage;
  let fixture: ComponentFixture<NetworksStpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksStpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksStpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
