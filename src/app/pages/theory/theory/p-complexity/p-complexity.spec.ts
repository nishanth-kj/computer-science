import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryPComplexityPage } from "./p-complexity";

describe("TheoryPComplexityPage", () => {
  let component: TheoryPComplexityPage;
  let fixture: ComponentFixture<TheoryPComplexityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryPComplexityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryPComplexityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
