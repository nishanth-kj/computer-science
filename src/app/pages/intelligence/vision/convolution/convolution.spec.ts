import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionConvolutionPage } from "./convolution";

describe("VisionConvolutionPage", () => {
  let component: VisionConvolutionPage;
  let fixture: ComponentFixture<VisionConvolutionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionConvolutionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionConvolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
