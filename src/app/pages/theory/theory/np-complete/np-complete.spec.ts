import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryNpCompletePage } from "./np-complete";

describe("TheoryNpCompletePage", () => {
  let component: TheoryNpCompletePage;
  let fixture: ComponentFixture<TheoryNpCompletePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryNpCompletePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryNpCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
