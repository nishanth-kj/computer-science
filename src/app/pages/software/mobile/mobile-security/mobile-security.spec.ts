import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileMobileSecurityPage } from "./mobile-security";

describe("MobileMobileSecurityPage", () => {
  let component: MobileMobileSecurityPage;
  let fixture: ComponentFixture<MobileMobileSecurityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMobileSecurityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileMobileSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
