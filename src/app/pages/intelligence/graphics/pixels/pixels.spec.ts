import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsPixelsPage } from "./pixels";

describe("GraphicsPixelsPage", () => {
  let component: GraphicsPixelsPage;
  let fixture: ComponentFixture<GraphicsPixelsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsPixelsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsPixelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
