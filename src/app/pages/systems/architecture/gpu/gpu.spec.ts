import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureGpuPage } from "./gpu";

describe("ArchitectureGpuPage", () => {
  let component: ArchitectureGpuPage;
  let fixture: ComponentFixture<ArchitectureGpuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureGpuPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureGpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
