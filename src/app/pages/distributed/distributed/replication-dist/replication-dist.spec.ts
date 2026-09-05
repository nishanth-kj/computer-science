import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedReplicationDistPage } from "./replication-dist";

describe("DistributedReplicationDistPage", () => {
  let component: DistributedReplicationDistPage;
  let fixture: ComponentFixture<DistributedReplicationDistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedReplicationDistPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedReplicationDistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
