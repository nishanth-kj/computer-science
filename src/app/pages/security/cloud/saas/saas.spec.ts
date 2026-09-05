import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudSaasPage } from "./saas";

describe("CloudSaasPage", () => {
  let component: CloudSaasPage;
  let fixture: ComponentFixture<CloudSaasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSaasPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudSaasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
