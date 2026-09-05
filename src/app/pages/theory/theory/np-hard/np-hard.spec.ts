import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryNpHardPage } from "./np-hard";

describe("TheoryNpHardPage", () => {
  let component: TheoryNpHardPage;
  let fixture: ComponentFixture<TheoryNpHardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryNpHardPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryNpHardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
