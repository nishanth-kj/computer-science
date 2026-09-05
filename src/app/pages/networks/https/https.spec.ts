import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksHttpsPage } from "./https";

describe("NetworksHttpsPage", () => {
  let component: NetworksHttpsPage;
  let fixture: ComponentFixture<NetworksHttpsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksHttpsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksHttpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
