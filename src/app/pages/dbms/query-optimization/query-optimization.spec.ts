import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsQueryOptimizationPage } from "./query-optimization";

describe("DbmsQueryOptimizationPage", () => {
  let component: DbmsQueryOptimizationPage;
  let fixture: ComponentFixture<DbmsQueryOptimizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsQueryOptimizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsQueryOptimizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
