import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedFailureDetectionPage } from "./failure-detection";

describe("DistributedFailureDetectionPage", () => {
  let component: DistributedFailureDetectionPage;
  let fixture: ComponentFixture<DistributedFailureDetectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedFailureDetectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedFailureDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
