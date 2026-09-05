import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityNetworkSecurityPage } from "./network-security";

describe("CybersecurityNetworkSecurityPage", () => {
  let component: CybersecurityNetworkSecurityPage;
  let fixture: ComponentFixture<CybersecurityNetworkSecurityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityNetworkSecurityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityNetworkSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
