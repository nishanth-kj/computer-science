import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecuritySecureCodingPage } from "./secure-coding";

describe("CybersecuritySecureCodingPage", () => {
  let component: CybersecuritySecureCodingPage;
  let fixture: ComponentFixture<CybersecuritySecureCodingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecuritySecureCodingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecuritySecureCodingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
