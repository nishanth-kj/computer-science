import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryTuringMachinesPage } from "./turing-machines";

describe("TheoryTuringMachinesPage", () => {
  let component: TheoryTuringMachinesPage;
  let fixture: ComponentFixture<TheoryTuringMachinesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryTuringMachinesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryTuringMachinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
