import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsControlPage } from "./control";

describe("RoboticsControlPage", () => {
  let component: RoboticsControlPage;
  let fixture: ComponentFixture<RoboticsControlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsControlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
