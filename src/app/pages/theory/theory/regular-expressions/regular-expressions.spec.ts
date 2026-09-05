import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryRegularExpressionsPage } from "./regular-expressions";

describe("TheoryRegularExpressionsPage", () => {
  let component: TheoryRegularExpressionsPage;
  let fixture: ComponentFixture<TheoryRegularExpressionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryRegularExpressionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryRegularExpressionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
