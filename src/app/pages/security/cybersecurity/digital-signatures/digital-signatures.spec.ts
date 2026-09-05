import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityDigitalSignaturesPage } from "./digital-signatures";

describe("CybersecurityDigitalSignaturesPage", () => {
  let component: CybersecurityDigitalSignaturesPage;
  let fixture: ComponentFixture<CybersecurityDigitalSignaturesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityDigitalSignaturesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityDigitalSignaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
