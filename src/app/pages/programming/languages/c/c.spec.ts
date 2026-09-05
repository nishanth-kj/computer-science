import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesCPage } from "./c";

describe("LanguagesCPage", () => {
  let component: LanguagesCPage;
  let fixture: ComponentFixture<LanguagesCPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesCPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
