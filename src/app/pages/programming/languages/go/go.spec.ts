import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesGoPage } from "./go";

describe("LanguagesGoPage", () => {
  let component: LanguagesGoPage;
  let fixture: ComponentFixture<LanguagesGoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesGoPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesGoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
