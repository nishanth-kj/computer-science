import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecuritySqlInjectionPage } from "./sql-injection";

describe("CybersecuritySqlInjectionPage", () => {
  let component: CybersecuritySqlInjectionPage;
  let fixture: ComponentFixture<CybersecuritySqlInjectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecuritySqlInjectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecuritySqlInjectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
