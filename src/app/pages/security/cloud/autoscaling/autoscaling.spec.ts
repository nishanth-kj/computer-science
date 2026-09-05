import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudAutoscalingPage } from "./autoscaling";

describe("CloudAutoscalingPage", () => {
  let component: CloudAutoscalingPage;
  let fixture: ComponentFixture<CloudAutoscalingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAutoscalingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudAutoscalingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
