import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchReproducibilityPage } from "./reproducibility";

describe("ResearchReproducibilityPage", () => {
  let component: ResearchReproducibilityPage;
  let fixture: ComponentFixture<ResearchReproducibilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchReproducibilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchReproducibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
