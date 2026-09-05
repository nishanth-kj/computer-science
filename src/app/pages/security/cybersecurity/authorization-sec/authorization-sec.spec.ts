import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityAuthorizationSecPage } from "./authorization-sec";

describe("CybersecurityAuthorizationSecPage", () => {
  let component: CybersecurityAuthorizationSecPage;
  let fixture: ComponentFixture<CybersecurityAuthorizationSecPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityAuthorizationSecPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityAuthorizationSecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
