import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesJvmPage } from "./jvm";

describe("LanguagesJvmPage", () => {
  let component: LanguagesJvmPage;
  let fixture: ComponentFixture<LanguagesJvmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesJvmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesJvmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
