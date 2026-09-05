import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityAsymmetricPage } from "./asymmetric";

describe("CybersecurityAsymmetricPage", () => {
  let component: CybersecurityAsymmetricPage;
  let fixture: ComponentFixture<CybersecurityAsymmetricPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityAsymmetricPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityAsymmetricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
