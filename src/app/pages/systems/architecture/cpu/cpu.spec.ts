import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureCpuPage } from "./cpu";

describe("ArchitectureCpuPage", () => {
  let component: ArchitectureCpuPage;
  let fixture: ComponentFixture<ArchitectureCpuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureCpuPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureCpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
