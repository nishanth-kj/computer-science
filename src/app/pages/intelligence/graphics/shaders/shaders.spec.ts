import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GraphicsShadersPage } from "./shaders";

describe("GraphicsShadersPage", () => {
  let component: GraphicsShadersPage;
  let fixture: ComponentFixture<GraphicsShadersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsShadersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsShadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
