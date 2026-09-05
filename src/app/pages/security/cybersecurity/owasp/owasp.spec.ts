import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityOwaspPage } from "./owasp";

describe("CybersecurityOwaspPage", () => {
  let component: CybersecurityOwaspPage;
  let fixture: ComponentFixture<CybersecurityOwaspPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityOwaspPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityOwaspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
