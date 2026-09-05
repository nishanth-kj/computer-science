import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlRegressionPage } from "./regression";

describe("MlRegressionPage", () => {
  let component: MlRegressionPage;
  let fixture: ComponentFixture<MlRegressionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlRegressionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlRegressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
