import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesKotlinPage } from "./kotlin";

describe("LanguagesKotlinPage", () => {
  let component: LanguagesKotlinPage;
  let fixture: ComponentFixture<LanguagesKotlinPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesKotlinPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesKotlinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
