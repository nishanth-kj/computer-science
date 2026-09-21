import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ProgrammingPage } from "./programming";

describe("ProgrammingPage", () => {
  let component: ProgrammingPage;
  let fixture: ComponentFixture<ProgrammingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("lists every programming sub-section", () => {
    const text: string = fixture.nativeElement.textContent;
    for (const title of ["Programming Fundamentals", "Programming Languages", "Object-Oriented Design", "Data Structures & Algorithms"]) {
      expect(text).toContain(title);
    }
  });
});
