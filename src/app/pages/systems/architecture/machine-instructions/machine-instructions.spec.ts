import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureMachineInstructionsPage } from "./machine-instructions";

describe("ArchitectureMachineInstructionsPage", () => {
  let component: ArchitectureMachineInstructionsPage;
  let fixture: ComponentFixture<ArchitectureMachineInstructionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureMachineInstructionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureMachineInstructionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
