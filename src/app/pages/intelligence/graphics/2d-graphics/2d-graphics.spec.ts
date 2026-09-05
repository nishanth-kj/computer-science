import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Graphics2dGraphicsPage } from "./2d-graphics";

describe("Graphics2dGraphicsPage", () => {
  let component: Graphics2dGraphicsPage;
  let fixture: ComponentFixture<Graphics2dGraphicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphics2dGraphicsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Graphics2dGraphicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
