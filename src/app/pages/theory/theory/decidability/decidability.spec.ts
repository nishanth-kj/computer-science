import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryDecidabilityPage } from "./decidability";

describe("TheoryDecidabilityPage", () => {
  let component: TheoryDecidabilityPage;
  let fixture: ComponentFixture<TheoryDecidabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryDecidabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryDecidabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
