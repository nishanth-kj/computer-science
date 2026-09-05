import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelGpuComputingPage } from "./gpu-computing";

describe("ParallelGpuComputingPage", () => {
  let component: ParallelGpuComputingPage;
  let fixture: ComponentFixture<ParallelGpuComputingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelGpuComputingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelGpuComputingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
