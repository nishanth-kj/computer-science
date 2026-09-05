import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudVirtualMachinesPage } from "./virtual-machines";

describe("CloudVirtualMachinesPage", () => {
  let component: CloudVirtualMachinesPage;
  let fixture: ComponentFixture<CloudVirtualMachinesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudVirtualMachinesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudVirtualMachinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
