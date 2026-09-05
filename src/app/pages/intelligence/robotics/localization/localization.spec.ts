import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsLocalizationPage } from "./localization";

describe("RoboticsLocalizationPage", () => {
  let component: RoboticsLocalizationPage;
  let fixture: ComponentFixture<RoboticsLocalizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsLocalizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsLocalizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
