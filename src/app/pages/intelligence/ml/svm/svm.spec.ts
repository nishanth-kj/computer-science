import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlSvmPage } from "./svm";

describe("MlSvmPage", () => {
  let component: MlSvmPage;
  let fixture: ComponentFixture<MlSvmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlSvmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlSvmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
