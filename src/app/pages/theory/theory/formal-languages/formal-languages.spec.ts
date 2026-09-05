import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryFormalLanguagesPage } from "./formal-languages";

describe("TheoryFormalLanguagesPage", () => {
  let component: TheoryFormalLanguagesPage;
  let fixture: ComponentFixture<TheoryFormalLanguagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryFormalLanguagesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryFormalLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
