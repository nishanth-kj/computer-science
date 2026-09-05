import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsMotionPlanningPage } from "./motion-planning";

describe("RoboticsMotionPlanningPage", () => {
  let component: RoboticsMotionPlanningPage;
  let fixture: ComponentFixture<RoboticsMotionPlanningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsMotionPlanningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsMotionPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
