import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDequePage } from "./deque";

describe("DsaDequePage", () => {
  let component: DsaDequePage;
  let fixture: ComponentFixture<DsaDequePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDequePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
