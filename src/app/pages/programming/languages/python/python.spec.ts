import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesPythonPage } from "./python";

describe("LanguagesPythonPage", () => {
  let component: LanguagesPythonPage;
  let fixture: ComponentFixture<LanguagesPythonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesPythonPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesPythonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
