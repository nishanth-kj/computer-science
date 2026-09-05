import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsActuatorsPage } from "./actuators";

describe("RoboticsActuatorsPage", () => {
  let component: RoboticsActuatorsPage;
  let fixture: ComponentFixture<RoboticsActuatorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsActuatorsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsActuatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
