import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlOverfittingPage } from "./overfitting";

describe("MlOverfittingPage", () => {
  let component: MlOverfittingPage;
  let fixture: ComponentFixture<MlOverfittingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlOverfittingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlOverfittingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
