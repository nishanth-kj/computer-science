import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelParallelAlgorithmsPage } from "./parallel-algorithms";

describe("ParallelParallelAlgorithmsPage", () => {
  let component: ParallelParallelAlgorithmsPage;
  let fixture: ComponentFixture<ParallelParallelAlgorithmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelParallelAlgorithmsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelParallelAlgorithmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
