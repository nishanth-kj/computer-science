import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsPage } from "./robotics";

describe("RoboticsPage", () => {
  let component: RoboticsPage;
  let fixture: ComponentFixture<RoboticsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
