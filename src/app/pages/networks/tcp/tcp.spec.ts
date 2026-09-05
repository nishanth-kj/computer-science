import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksTcpPage } from "./tcp";

describe("NetworksTcpPage", () => {
  let component: NetworksTcpPage;
  let fixture: ComponentFixture<NetworksTcpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksTcpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksTcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
