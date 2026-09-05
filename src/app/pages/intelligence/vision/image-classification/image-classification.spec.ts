import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionImageClassificationPage } from "./image-classification";

describe("VisionImageClassificationPage", () => {
  let component: VisionImageClassificationPage;
  let fixture: ComponentFixture<VisionImageClassificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionImageClassificationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionImageClassificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
