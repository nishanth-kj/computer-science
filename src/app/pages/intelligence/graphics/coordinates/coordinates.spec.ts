import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsCoordinatesPage } from "./coordinates";

describe("GraphicsCoordinatesPage", () => {
  let component: GraphicsCoordinatesPage;
  let fixture: ComponentFixture<GraphicsCoordinatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsCoordinatesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsCoordinatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
