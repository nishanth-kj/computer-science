import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaPriorityQueuesPage } from "./priority-queues";

describe("DsaPriorityQueuesPage", () => {
  let component: DsaPriorityQueuesPage;
  let fixture: ComponentFixture<DsaPriorityQueuesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaPriorityQueuesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaPriorityQueuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
