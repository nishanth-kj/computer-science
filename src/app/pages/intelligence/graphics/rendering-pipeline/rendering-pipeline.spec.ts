import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsRenderingPipelinePage } from "./rendering-pipeline";

describe("GraphicsRenderingPipelinePage", () => {
  let component: GraphicsRenderingPipelinePage;
  let fixture: ComponentFixture<GraphicsRenderingPipelinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsRenderingPipelinePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsRenderingPipelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
