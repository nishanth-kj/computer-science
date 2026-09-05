import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsPathPlanningPage } from "./path-planning";

describe("RoboticsPathPlanningPage", () => {
  let component: RoboticsPathPlanningPage;
  let fixture: ComponentFixture<RoboticsPathPlanningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsPathPlanningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsPathPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
