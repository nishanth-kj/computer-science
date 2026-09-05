import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityIdentityManagementPage } from "./identity-management";

describe("CybersecurityIdentityManagementPage", () => {
  let component: CybersecurityIdentityManagementPage;
  let fixture: ComponentFixture<CybersecurityIdentityManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityIdentityManagementPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityIdentityManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
