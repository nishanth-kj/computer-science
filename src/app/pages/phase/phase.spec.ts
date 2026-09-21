import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { PhasePage } from "./phase";

describe("PhasePage", () => {
  let component: PhasePage;
  let fixture: ComponentFixture<PhasePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhasePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(PhasePage);
    fixture.componentRef.setInput("id", "phase-2");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("covers operating systems, databases, networks, and programming in order", () => {
    expect(component.groups().map((g) => g.id)).toEqual(["os", "dbms", "networks", "programming"]);
  });

  it("gives programming its four sub-sections and a hub link", () => {
    const programming = component.groups().find((g) => g.id === "programming");
    expect(programming?.sections).toEqual(["fundamentals", "languages", "oop", "dsa"]);
    expect(programming?.href).toBe("/programming");
  });
});
