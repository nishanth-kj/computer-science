import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryPage } from "./theory";

describe("TheoryPage", () => {
  let component: TheoryPage;
  let fixture: ComponentFixture<TheoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
