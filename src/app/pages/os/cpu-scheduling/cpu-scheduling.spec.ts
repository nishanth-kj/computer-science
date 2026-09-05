import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsCpuSchedulingPage } from "./cpu-scheduling";

describe("OsCpuSchedulingPage", () => {
  let component: OsCpuSchedulingPage;
  let fixture: ComponentFixture<OsCpuSchedulingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsCpuSchedulingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsCpuSchedulingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
