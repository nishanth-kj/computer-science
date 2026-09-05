import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsScopePage } from "./scope";

describe("FundamentalsScopePage", () => {
  let component: FundamentalsScopePage;
  let fixture: ComponentFixture<FundamentalsScopePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsScopePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsScopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
