import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryPdaPage } from "./pda";

describe("TheoryPdaPage", () => {
  let component: TheoryPdaPage;
  let fixture: ComponentFixture<TheoryPdaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryPdaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryPdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
