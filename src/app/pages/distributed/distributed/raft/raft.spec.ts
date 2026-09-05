import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedRaftPage } from "./raft";

describe("DistributedRaftPage", () => {
  let component: DistributedRaftPage;
  let fixture: ComponentFixture<DistributedRaftPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedRaftPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedRaftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
