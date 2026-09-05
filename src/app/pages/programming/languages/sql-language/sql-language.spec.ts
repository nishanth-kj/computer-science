import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesSqlLanguagePage } from "./sql-language";

describe("LanguagesSqlLanguagePage", () => {
  let component: LanguagesSqlLanguagePage;
  let fixture: ComponentFixture<LanguagesSqlLanguagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesSqlLanguagePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesSqlLanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
