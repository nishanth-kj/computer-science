import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsRobotPerceptionPage } from "./robot-perception";

describe("RoboticsRobotPerceptionPage", () => {
  let component: RoboticsRobotPerceptionPage;
  let fixture: ComponentFixture<RoboticsRobotPerceptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsRobotPerceptionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsRobotPerceptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
