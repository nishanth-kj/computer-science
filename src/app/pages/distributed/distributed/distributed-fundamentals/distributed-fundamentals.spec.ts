import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedDistributedFundamentalsPage } from "./distributed-fundamentals";

describe("DistributedDistributedFundamentalsPage", () => {
  let component: DistributedDistributedFundamentalsPage;
  let fixture: ComponentFixture<DistributedDistributedFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedDistributedFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedDistributedFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
