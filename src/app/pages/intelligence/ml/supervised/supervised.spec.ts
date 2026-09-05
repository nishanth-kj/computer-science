import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlSupervisedPage } from "./supervised";

describe("MlSupervisedPage", () => {
  let component: MlSupervisedPage;
  let fixture: ComponentFixture<MlSupervisedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlSupervisedPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlSupervisedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
