import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { ArchitecturePage } from "./architecture";

describe("ArchitecturePage", () => {
  let component: ArchitecturePage;
  let fixture: ComponentFixture<ArchitecturePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitecturePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
