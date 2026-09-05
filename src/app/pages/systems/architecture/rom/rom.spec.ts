import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureRomPage } from "./rom";

describe("ArchitectureRomPage", () => {
  let component: ArchitectureRomPage;
  let fixture: ComponentFixture<ArchitectureRomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureRomPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureRomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
