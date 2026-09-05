import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryHaltingProblemPage } from "./halting-problem";

describe("TheoryHaltingProblemPage", () => {
  let component: TheoryHaltingProblemPage;
  let fixture: ComponentFixture<TheoryHaltingProblemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryHaltingProblemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryHaltingProblemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
