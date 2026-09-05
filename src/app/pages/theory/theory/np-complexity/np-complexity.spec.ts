import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryNpComplexityPage } from "./np-complexity";

describe("TheoryNpComplexityPage", () => {
  let component: TheoryNpComplexityPage;
  let fixture: ComponentFixture<TheoryNpComplexityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryNpComplexityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryNpComplexityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
