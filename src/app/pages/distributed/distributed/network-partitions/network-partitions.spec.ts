import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedNetworkPartitionsPage } from "./network-partitions";

describe("DistributedNetworkPartitionsPage", () => {
  let component: DistributedNetworkPartitionsPage;
  let fixture: ComponentFixture<DistributedNetworkPartitionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedNetworkPartitionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedNetworkPartitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
