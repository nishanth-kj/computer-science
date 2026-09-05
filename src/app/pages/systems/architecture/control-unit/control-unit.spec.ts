import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureControlUnitPage } from "./control-unit";

describe("ArchitectureControlUnitPage", () => {
  let component: ArchitectureControlUnitPage;
  let fixture: ComponentFixture<ArchitectureControlUnitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureControlUnitPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureControlUnitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
