import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureNumaPage } from "./numa";

describe("ArchitectureNumaPage", () => {
  let component: ArchitectureNumaPage;
  let fixture: ComponentFixture<ArchitectureNumaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureNumaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureNumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
