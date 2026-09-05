import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsComputerGraphicsFundamentalsPage } from "./computer-graphics-fundamentals";

describe("GraphicsComputerGraphicsFundamentalsPage", () => {
  let component: GraphicsComputerGraphicsFundamentalsPage;
  let fixture: ComponentFixture<GraphicsComputerGraphicsFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsComputerGraphicsFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsComputerGraphicsFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
