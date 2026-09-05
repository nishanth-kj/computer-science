import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedTwoPhaseCommitPage } from "./two-phase-commit";

describe("DistributedTwoPhaseCommitPage", () => {
  let component: DistributedTwoPhaseCommitPage;
  let fixture: ComponentFixture<DistributedTwoPhaseCommitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedTwoPhaseCommitPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedTwoPhaseCommitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
