import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudVpcPage } from "./vpc";

describe("CloudVpcPage", () => {
  let component: CloudVpcPage;
  let fixture: ComponentFixture<CloudVpcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudVpcPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudVpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
