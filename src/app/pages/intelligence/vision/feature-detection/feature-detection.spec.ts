import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionFeatureDetectionPage } from "./feature-detection";

describe("VisionFeatureDetectionPage", () => {
  let component: VisionFeatureDetectionPage;
  let fixture: ComponentFixture<VisionFeatureDetectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionFeatureDetectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionFeatureDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
