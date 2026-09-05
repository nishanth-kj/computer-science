import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionSegmentationPage } from "./segmentation";

describe("VisionSegmentationPage", () => {
  let component: VisionSegmentationPage;
  let fixture: ComponentFixture<VisionSegmentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionSegmentationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionSegmentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
