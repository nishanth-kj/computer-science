import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksHttpPage } from "./http";

describe("NetworksHttpPage", () => {
  let component: NetworksHttpPage;
  let fixture: ComponentFixture<NetworksHttpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksHttpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksHttpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
