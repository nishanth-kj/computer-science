import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { RoboticsSensorsPage } from "./sensors";

describe("RoboticsSensorsPage", () => {
  let component: RoboticsSensorsPage;
  let fixture: ComponentFixture<RoboticsSensorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsSensorsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsSensorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
