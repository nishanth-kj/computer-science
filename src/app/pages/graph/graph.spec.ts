import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Graph } from "./graph";

describe("Graph", () => {
  let component: Graph;
  let fixture: ComponentFixture<Graph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graph],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Graph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
