import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringUnitTestingPage } from "./unit-testing";

describe("SoftwareEngineeringUnitTestingPage", () => {
  let component: SoftwareEngineeringUnitTestingPage;
  let fixture: ComponentFixture<SoftwareEngineeringUnitTestingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringUnitTestingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringUnitTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
