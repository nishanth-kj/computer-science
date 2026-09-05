import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsMemoryPage } from "./memory";

describe("FundamentalsMemoryPage", () => {
  let component: FundamentalsMemoryPage;
  let fixture: ComponentFixture<FundamentalsMemoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsMemoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
