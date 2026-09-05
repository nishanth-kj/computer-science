import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { GraphicsPage } from "./graphics";

describe("GraphicsPage", () => {
  let component: GraphicsPage;
  let fixture: ComponentFixture<GraphicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
