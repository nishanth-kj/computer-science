import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopStatePatternPage } from "./state-pattern";

describe("OopStatePatternPage", () => {
  let component: OopStatePatternPage;
  let fixture: ComponentFixture<OopStatePatternPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopStatePatternPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopStatePatternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
