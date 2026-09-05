import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopDecoratorPage } from "./decorator";

describe("OopDecoratorPage", () => {
  let component: OopDecoratorPage;
  let fixture: ComponentFixture<OopDecoratorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopDecoratorPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopDecoratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
