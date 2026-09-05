import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringVersionControlPage } from "./version-control";

describe("SoftwareEngineeringVersionControlPage", () => {
  let component: SoftwareEngineeringVersionControlPage;
  let fixture: ComponentFixture<SoftwareEngineeringVersionControlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringVersionControlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringVersionControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
