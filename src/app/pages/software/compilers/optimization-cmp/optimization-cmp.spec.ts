import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersOptimizationCmpPage } from "./optimization-cmp";

describe("CompilersOptimizationCmpPage", () => {
  let component: CompilersOptimizationCmpPage;
  let fixture: ComponentFixture<CompilersOptimizationCmpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersOptimizationCmpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersOptimizationCmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
