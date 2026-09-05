import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesCppPage } from "./cpp";

describe("LanguagesCppPage", () => {
  let component: LanguagesCppPage;
  let fixture: ComponentFixture<LanguagesCppPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesCppPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesCppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
