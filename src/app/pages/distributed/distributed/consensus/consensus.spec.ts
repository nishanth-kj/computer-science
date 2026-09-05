import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedConsensusPage } from "./consensus";

describe("DistributedConsensusPage", () => {
  let component: DistributedConsensusPage;
  let fixture: ComponentFixture<DistributedConsensusPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedConsensusPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedConsensusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
