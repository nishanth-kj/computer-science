import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesBashPage } from "./bash";

describe("LanguagesBashPage", () => {
  let component: LanguagesBashPage;
  let fixture: ComponentFixture<LanguagesBashPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesBashPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesBashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
