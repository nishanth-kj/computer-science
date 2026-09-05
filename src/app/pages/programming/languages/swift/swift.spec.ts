import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LanguagesSwiftPage } from "./swift";

describe("LanguagesSwiftPage", () => {
  let component: LanguagesSwiftPage;
  let fixture: ComponentFixture<LanguagesSwiftPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesSwiftPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesSwiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
