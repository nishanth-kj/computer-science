import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityAuthenticationSecPage } from "./authentication-sec";

describe("CybersecurityAuthenticationSecPage", () => {
  let component: CybersecurityAuthenticationSecPage;
  let fixture: ComponentFixture<CybersecurityAuthenticationSecPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityAuthenticationSecPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityAuthenticationSecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
