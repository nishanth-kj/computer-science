import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesTypescriptPage } from "./typescript";

describe("LanguagesTypescriptPage", () => {
  let component: LanguagesTypescriptPage;
  let fixture: ComponentFixture<LanguagesTypescriptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesTypescriptPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesTypescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
