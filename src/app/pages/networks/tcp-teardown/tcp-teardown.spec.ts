import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksTcpTeardownPage } from "./tcp-teardown";

describe("NetworksTcpTeardownPage", () => {
  let component: NetworksTcpTeardownPage;
  let fixture: ComponentFixture<NetworksTcpTeardownPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksTcpTeardownPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksTcpTeardownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
