import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudCloudFundamentalsPage } from "./cloud-fundamentals";

describe("CloudCloudFundamentalsPage", () => {
  let component: CloudCloudFundamentalsPage;
  let fixture: ComponentFixture<CloudCloudFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCloudFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudCloudFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
