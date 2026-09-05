import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringArchitectureSePage } from "./architecture-se";

describe("SoftwareEngineeringArchitectureSePage", () => {
  let component: SoftwareEngineeringArchitectureSePage;
  let fixture: ComponentFixture<SoftwareEngineeringArchitectureSePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringArchitectureSePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringArchitectureSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
