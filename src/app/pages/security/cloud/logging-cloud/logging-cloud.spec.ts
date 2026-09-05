import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudLoggingCloudPage } from "./logging-cloud";

describe("CloudLoggingCloudPage", () => {
  let component: CloudLoggingCloudPage;
  let fixture: ComponentFixture<CloudLoggingCloudPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudLoggingCloudPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudLoggingCloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
