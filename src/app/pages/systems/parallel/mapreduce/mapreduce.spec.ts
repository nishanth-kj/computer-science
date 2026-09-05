import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelMapreducePage } from "./mapreduce";

describe("ParallelMapreducePage", () => {
  let component: ParallelMapreducePage;
  let fixture: ComponentFixture<ParallelMapreducePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelMapreducePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelMapreducePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
