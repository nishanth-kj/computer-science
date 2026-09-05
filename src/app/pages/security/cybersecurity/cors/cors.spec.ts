import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityCorsPage } from "./cors";

describe("CybersecurityCorsPage", () => {
  let component: CybersecurityCorsPage;
  let fixture: ComponentFixture<CybersecurityCorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityCorsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityCorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
