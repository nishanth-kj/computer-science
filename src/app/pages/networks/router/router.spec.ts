import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksRouterPage } from "./router";

describe("NetworksRouterPage", () => {
  let component: NetworksRouterPage;
  let fixture: ComponentFixture<NetworksRouterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksRouterPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksRouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
