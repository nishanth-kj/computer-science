import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsLinkerPage } from "./linker";

describe("FundamentalsLinkerPage", () => {
  let component: FundamentalsLinkerPage;
  let fixture: ComponentFixture<FundamentalsLinkerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsLinkerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsLinkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
