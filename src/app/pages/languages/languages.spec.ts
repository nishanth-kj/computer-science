import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { LanguagesPage } from "./languages";

describe("LanguagesPage", () => {
  let component: LanguagesPage;
  let fixture: ComponentFixture<LanguagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
