import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlFeatureEngineeringPage } from "./feature-engineering";

describe("MlFeatureEngineeringPage", () => {
  let component: MlFeatureEngineeringPage;
  let fixture: ComponentFixture<MlFeatureEngineeringPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlFeatureEngineeringPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlFeatureEngineeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
