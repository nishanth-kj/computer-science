import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryRegularLanguagesPage } from "./regular-languages";

describe("TheoryRegularLanguagesPage", () => {
  let component: TheoryRegularLanguagesPage;
  let fixture: ComponentFixture<TheoryRegularLanguagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryRegularLanguagesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryRegularLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
