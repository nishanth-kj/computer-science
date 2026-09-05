import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSmtpPage } from "./smtp";

describe("NetworksSmtpPage", () => {
  let component: NetworksSmtpPage;
  let fixture: ComponentFixture<NetworksSmtpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSmtpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSmtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
