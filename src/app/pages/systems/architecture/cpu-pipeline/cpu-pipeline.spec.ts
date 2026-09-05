import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureCpuPipelinePage } from "./cpu-pipeline";

describe("ArchitectureCpuPipelinePage", () => {
  let component: ArchitectureCpuPipelinePage;
  let fixture: ComponentFixture<ArchitectureCpuPipelinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureCpuPipelinePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureCpuPipelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
