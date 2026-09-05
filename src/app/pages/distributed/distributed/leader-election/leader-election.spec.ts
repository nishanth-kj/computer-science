import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedLeaderElectionPage } from "./leader-election";

describe("DistributedLeaderElectionPage", () => {
  let component: DistributedLeaderElectionPage;
  let fixture: ComponentFixture<DistributedLeaderElectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedLeaderElectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedLeaderElectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
