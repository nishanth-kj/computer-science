import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudIaasPage } from "./iaas";

describe("CloudIaasPage", () => {
  let component: CloudIaasPage;
  let fixture: ComponentFixture<CloudIaasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudIaasPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudIaasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
