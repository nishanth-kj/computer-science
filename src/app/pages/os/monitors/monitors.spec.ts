import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsMonitorsPage } from "./monitors";

describe("OsMonitorsPage", () => {
  let component: OsMonitorsPage;
  let fixture: ComponentFixture<OsMonitorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsMonitorsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsMonitorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
