import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedFaultTolerancePage } from "./fault-tolerance";

describe("DistributedFaultTolerancePage", () => {
  let component: DistributedFaultTolerancePage;
  let fixture: ComponentFixture<DistributedFaultTolerancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedFaultTolerancePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedFaultTolerancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
