import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlRandomForestsPage } from "./random-forests";

describe("MlRandomForestsPage", () => {
  let component: MlRandomForestsPage;
  let fixture: ComponentFixture<MlRandomForestsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlRandomForestsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlRandomForestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
