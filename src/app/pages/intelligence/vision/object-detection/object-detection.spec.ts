import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionObjectDetectionPage } from "./object-detection";

describe("VisionObjectDetectionPage", () => {
  let component: VisionObjectDetectionPage;
  let fixture: ComponentFixture<VisionObjectDetectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionObjectDetectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionObjectDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
