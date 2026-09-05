import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsLightingPage } from "./lighting";

describe("GraphicsLightingPage", () => {
  let component: GraphicsLightingPage;
  let fixture: ComponentFixture<GraphicsLightingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsLightingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsLightingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
