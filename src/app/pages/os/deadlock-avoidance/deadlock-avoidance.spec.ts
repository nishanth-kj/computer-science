import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsDeadlockAvoidancePage } from "./deadlock-avoidance";

describe("OsDeadlockAvoidancePage", () => {
  let component: OsDeadlockAvoidancePage;
  let fixture: ComponentFixture<OsDeadlockAvoidancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsDeadlockAvoidancePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsDeadlockAvoidancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
