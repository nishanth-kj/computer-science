import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlDecisionTreesMlPage } from "./decision-trees-ml";

describe("MlDecisionTreesMlPage", () => {
  let component: MlDecisionTreesMlPage;
  let fixture: ComponentFixture<MlDecisionTreesMlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlDecisionTreesMlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlDecisionTreesMlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
