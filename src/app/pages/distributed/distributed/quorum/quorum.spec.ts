import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedQuorumPage } from "./quorum";

describe("DistributedQuorumPage", () => {
  let component: DistributedQuorumPage;
  let fixture: ComponentFixture<DistributedQuorumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedQuorumPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedQuorumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
