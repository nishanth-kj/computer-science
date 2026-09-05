import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryUndecidabilityPage } from "./undecidability";

describe("TheoryUndecidabilityPage", () => {
  let component: TheoryUndecidabilityPage;
  let fixture: ComponentFixture<TheoryUndecidabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryUndecidabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryUndecidabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
