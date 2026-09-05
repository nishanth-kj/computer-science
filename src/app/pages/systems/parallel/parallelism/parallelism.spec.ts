import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelParallelismPage } from "./parallelism";

describe("ParallelParallelismPage", () => {
  let component: ParallelParallelismPage;
  let fixture: ComponentFixture<ParallelParallelismPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelParallelismPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelParallelismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
