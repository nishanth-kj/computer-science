import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiPlanningPage } from "./planning";

describe("AiPlanningPage", () => {
  let component: AiPlanningPage;
  let fixture: ComponentFixture<AiPlanningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPlanningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
