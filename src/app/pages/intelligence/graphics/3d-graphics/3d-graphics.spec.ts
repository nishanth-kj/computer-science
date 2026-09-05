import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Graphics3dGraphicsPage } from "./3d-graphics";

describe("Graphics3dGraphicsPage", () => {
  let component: Graphics3dGraphicsPage;
  let fixture: ComponentFixture<Graphics3dGraphicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphics3dGraphicsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Graphics3dGraphicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
