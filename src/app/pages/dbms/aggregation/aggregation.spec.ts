import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsAggregationPage } from "./aggregation";

describe("DbmsAggregationPage", () => {
  let component: DbmsAggregationPage;
  let fixture: ComponentFixture<DbmsAggregationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsAggregationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsAggregationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
