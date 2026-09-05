import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaSegmentTreesPage } from "./segment-trees";

describe("DsaSegmentTreesPage", () => {
  let component: DsaSegmentTreesPage;
  let fixture: ComponentFixture<DsaSegmentTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaSegmentTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaSegmentTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
