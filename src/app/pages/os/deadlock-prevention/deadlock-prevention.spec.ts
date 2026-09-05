import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsDeadlockPreventionPage } from "./deadlock-prevention";

describe("OsDeadlockPreventionPage", () => {
  let component: OsDeadlockPreventionPage;
  let fixture: ComponentFixture<OsDeadlockPreventionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsDeadlockPreventionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsDeadlockPreventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
