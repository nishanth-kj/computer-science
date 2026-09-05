import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityEncryptionPage } from "./encryption";

describe("CybersecurityEncryptionPage", () => {
  let component: CybersecurityEncryptionPage;
  let fixture: ComponentFixture<CybersecurityEncryptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityEncryptionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityEncryptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
