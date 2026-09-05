import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryComplexityTheoryPage } from "./complexity-theory";

describe("TheoryComplexityTheoryPage", () => {
  let component: TheoryComplexityTheoryPage;
  let fixture: ComponentFixture<TheoryComplexityTheoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryComplexityTheoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryComplexityTheoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
