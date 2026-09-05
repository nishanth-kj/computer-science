import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlRegularizationPage } from "./regularization";

describe("MlRegularizationPage", () => {
  let component: MlRegularizationPage;
  let fixture: ComponentFixture<MlRegularizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlRegularizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlRegularizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
