import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesRustPage } from "./rust";

describe("LanguagesRustPage", () => {
  let component: LanguagesRustPage;
  let fixture: ComponentFixture<LanguagesRustPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesRustPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesRustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
