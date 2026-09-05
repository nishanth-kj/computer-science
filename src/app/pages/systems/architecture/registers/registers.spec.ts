import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureRegistersPage } from "./registers";

describe("ArchitectureRegistersPage", () => {
  let component: ArchitectureRegistersPage;
  let fixture: ComponentFixture<ArchitectureRegistersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureRegistersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureRegistersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
