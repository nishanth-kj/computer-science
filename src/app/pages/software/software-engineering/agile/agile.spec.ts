import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringAgilePage } from "./agile";

describe("SoftwareEngineeringAgilePage", () => {
  let component: SoftwareEngineeringAgilePage;
  let fixture: ComponentFixture<SoftwareEngineeringAgilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringAgilePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringAgilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
