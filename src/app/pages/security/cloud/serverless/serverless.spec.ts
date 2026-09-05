import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudServerlessPage } from "./serverless";

describe("CloudServerlessPage", () => {
  let component: CloudServerlessPage;
  let fixture: ComponentFixture<CloudServerlessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudServerlessPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudServerlessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
