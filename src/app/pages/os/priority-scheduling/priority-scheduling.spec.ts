import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsPrioritySchedulingPage } from "./priority-scheduling";

describe("OsPrioritySchedulingPage", () => {
  let component: OsPrioritySchedulingPage;
  let fixture: ComponentFixture<OsPrioritySchedulingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsPrioritySchedulingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsPrioritySchedulingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
