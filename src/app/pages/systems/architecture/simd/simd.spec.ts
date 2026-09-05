import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureSimdPage } from "./simd";

describe("ArchitectureSimdPage", () => {
  let component: ArchitectureSimdPage;
  let fixture: ComponentFixture<ArchitectureSimdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureSimdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureSimdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
