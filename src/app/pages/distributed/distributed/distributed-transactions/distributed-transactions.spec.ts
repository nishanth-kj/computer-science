import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedDistributedTransactionsPage } from "./distributed-transactions";

describe("DistributedDistributedTransactionsPage", () => {
  let component: DistributedDistributedTransactionsPage;
  let fixture: ComponentFixture<DistributedDistributedTransactionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedDistributedTransactionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedDistributedTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
