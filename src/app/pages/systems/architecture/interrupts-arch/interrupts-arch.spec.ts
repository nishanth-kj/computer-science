import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureInterruptsArchPage } from "./interrupts-arch";

describe("ArchitectureInterruptsArchPage", () => {
  let component: ArchitectureInterruptsArchPage;
  let fixture: ComponentFixture<ArchitectureInterruptsArchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureInterruptsArchPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureInterruptsArchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
