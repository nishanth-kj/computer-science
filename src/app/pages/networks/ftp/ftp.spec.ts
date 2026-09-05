import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksFtpPage } from "./ftp";

describe("NetworksFtpPage", () => {
  let component: NetworksFtpPage;
  let fixture: ComponentFixture<NetworksFtpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksFtpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksFtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
