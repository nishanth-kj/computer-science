import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TermsPage } from "./terms";

describe("TermsPage", () => {
  let component: TermsPage;
  let fixture: ComponentFixture<TermsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(TermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
