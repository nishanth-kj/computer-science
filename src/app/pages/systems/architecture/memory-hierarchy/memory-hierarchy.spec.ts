import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureMemoryHierarchyPage } from "./memory-hierarchy";

describe("ArchitectureMemoryHierarchyPage", () => {
  let component: ArchitectureMemoryHierarchyPage;
  let fixture: ComponentFixture<ArchitectureMemoryHierarchyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureMemoryHierarchyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureMemoryHierarchyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
