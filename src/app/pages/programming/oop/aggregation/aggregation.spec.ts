import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopAggregationPage } from "./aggregation";

describe("OopAggregationPage", () => {
  let component: OopAggregationPage;
  let fixture: ComponentFixture<OopAggregationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopAggregationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopAggregationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
