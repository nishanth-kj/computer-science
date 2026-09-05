import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsFunctionsPage } from "./functions";

describe("FundamentalsFunctionsPage", () => {
  let component: FundamentalsFunctionsPage;
  let fixture: ComponentFixture<FundamentalsFunctionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsFunctionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsFunctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
