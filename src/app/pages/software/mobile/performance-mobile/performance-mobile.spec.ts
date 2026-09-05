import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobilePerformanceMobilePage } from "./performance-mobile";

describe("MobilePerformanceMobilePage", () => {
  let component: MobilePerformanceMobilePage;
  let fixture: ComponentFixture<MobilePerformanceMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePerformanceMobilePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobilePerformanceMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
