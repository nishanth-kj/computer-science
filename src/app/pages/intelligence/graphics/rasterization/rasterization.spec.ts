import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsRasterizationPage } from "./rasterization";

describe("GraphicsRasterizationPage", () => {
  let component: GraphicsRasterizationPage;
  let fixture: ComponentFixture<GraphicsRasterizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsRasterizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsRasterizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
