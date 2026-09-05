import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudObjectStorageCloudPage } from "./object-storage-cloud";

describe("CloudObjectStorageCloudPage", () => {
  let component: CloudObjectStorageCloudPage;
  let fixture: ComponentFixture<CloudObjectStorageCloudPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudObjectStorageCloudPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudObjectStorageCloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
