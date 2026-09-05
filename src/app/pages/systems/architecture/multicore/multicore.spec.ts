import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureMulticorePage } from "./multicore";

describe("ArchitectureMulticorePage", () => {
  let component: ArchitectureMulticorePage;
  let fixture: ComponentFixture<ArchitectureMulticorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureMulticorePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureMulticorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
