import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryDfaPage } from "./dfa";

describe("TheoryDfaPage", () => {
  let component: TheoryDfaPage;
  let fixture: ComponentFixture<TheoryDfaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryDfaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryDfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
