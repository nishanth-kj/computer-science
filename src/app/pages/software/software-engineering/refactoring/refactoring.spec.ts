import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringRefactoringPage } from "./refactoring";

describe("SoftwareEngineeringRefactoringPage", () => {
  let component: SoftwareEngineeringRefactoringPage;
  let fixture: ComponentFixture<SoftwareEngineeringRefactoringPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringRefactoringPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringRefactoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
