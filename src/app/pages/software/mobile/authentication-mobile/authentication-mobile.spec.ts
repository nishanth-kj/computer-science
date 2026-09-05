import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileAuthenticationMobilePage } from "./authentication-mobile";

describe("MobileAuthenticationMobilePage", () => {
  let component: MobileAuthenticationMobilePage;
  let fixture: ComponentFixture<MobileAuthenticationMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAuthenticationMobilePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAuthenticationMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
