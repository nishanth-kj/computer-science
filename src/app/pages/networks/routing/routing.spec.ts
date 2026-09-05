import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksRoutingPage } from "./routing";

describe("NetworksRoutingPage", () => {
  let component: NetworksRoutingPage;
  let fixture: ComponentFixture<NetworksRoutingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksRoutingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksRoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
