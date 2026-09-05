import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsDynamicMemoryPage } from "./dynamic-memory";

describe("FundamentalsDynamicMemoryPage", () => {
  let component: FundamentalsDynamicMemoryPage;
  let fixture: ComponentFixture<FundamentalsDynamicMemoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsDynamicMemoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsDynamicMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
