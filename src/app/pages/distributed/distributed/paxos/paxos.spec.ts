import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedPaxosPage } from "./paxos";

describe("DistributedPaxosPage", () => {
  let component: DistributedPaxosPage;
  let fixture: ComponentFixture<DistributedPaxosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedPaxosPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedPaxosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
