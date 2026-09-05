import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityPasswordSecurityPage } from "./password-security";

describe("CybersecurityPasswordSecurityPage", () => {
  let component: CybersecurityPasswordSecurityPage;
  let fixture: ComponentFixture<CybersecurityPasswordSecurityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityPasswordSecurityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityPasswordSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
