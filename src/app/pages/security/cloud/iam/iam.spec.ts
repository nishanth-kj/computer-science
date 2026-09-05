import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudIamPage } from "./iam";

describe("CloudIamPage", () => {
  let component: CloudIamPage;
  let fixture: ComponentFixture<CloudIamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudIamPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudIamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
