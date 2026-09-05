import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelConcurrencyPage } from "./concurrency";

describe("ParallelConcurrencyPage", () => {
  let component: ParallelConcurrencyPage;
  let fixture: ComponentFixture<ParallelConcurrencyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelConcurrencyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelConcurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
