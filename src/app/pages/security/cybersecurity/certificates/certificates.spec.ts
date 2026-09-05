import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityCertificatesPage } from "./certificates";

describe("CybersecurityCertificatesPage", () => {
  let component: CybersecurityCertificatesPage;
  let fixture: ComponentFixture<CybersecurityCertificatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityCertificatesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityCertificatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
