import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopCohesionPage } from "./cohesion";

describe("OopCohesionPage", () => {
  let component: OopCohesionPage;
  let fixture: ComponentFixture<OopCohesionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopCohesionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopCohesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
