import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsPointersPage } from "./pointers";

describe("FundamentalsPointersPage", () => {
  let component: FundamentalsPointersPage;
  let fixture: ComponentFixture<FundamentalsPointersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsPointersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsPointersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
