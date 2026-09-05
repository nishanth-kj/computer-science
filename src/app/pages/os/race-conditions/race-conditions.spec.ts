import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsRaceConditionsPage } from "./race-conditions";

describe("OsRaceConditionsPage", () => {
  let component: OsRaceConditionsPage;
  let fixture: ComponentFixture<OsRaceConditionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsRaceConditionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsRaceConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
