import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsSignalsPage } from "./signals";

describe("OsSignalsPage", () => {
  let component: OsSignalsPage;
  let fixture: ComponentFixture<OsSignalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsSignalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsSignalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
