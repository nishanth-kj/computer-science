import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlUnsupervisedPage } from "./unsupervised";

describe("MlUnsupervisedPage", () => {
  let component: MlUnsupervisedPage;
  let fixture: ComponentFixture<MlUnsupervisedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlUnsupervisedPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlUnsupervisedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
