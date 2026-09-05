import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringTestingPage } from "./testing";

describe("SoftwareEngineeringTestingPage", () => {
  let component: SoftwareEngineeringTestingPage;
  let fixture: ComponentFixture<SoftwareEngineeringTestingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringTestingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
