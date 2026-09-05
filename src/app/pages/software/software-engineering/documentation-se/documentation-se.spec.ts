import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringDocumentationSePage } from "./documentation-se";

describe("SoftwareEngineeringDocumentationSePage", () => {
  let component: SoftwareEngineeringDocumentationSePage;
  let fixture: ComponentFixture<SoftwareEngineeringDocumentationSePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringDocumentationSePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringDocumentationSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
