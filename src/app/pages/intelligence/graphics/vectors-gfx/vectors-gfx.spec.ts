import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsVectorsGfxPage } from "./vectors-gfx";

describe("GraphicsVectorsGfxPage", () => {
  let component: GraphicsVectorsGfxPage;
  let fixture: ComponentFixture<GraphicsVectorsGfxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsVectorsGfxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsVectorsGfxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
