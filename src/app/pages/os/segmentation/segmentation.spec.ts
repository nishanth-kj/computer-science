import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsSegmentationPage } from "./segmentation";

describe("OsSegmentationPage", () => {
  let component: OsSegmentationPage;
  let fixture: ComponentFixture<OsSegmentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsSegmentationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsSegmentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
