import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsProcessesPage } from "./processes";

describe("OsProcessesPage", () => {
  let component: OsProcessesPage;
  let fixture: ComponentFixture<OsProcessesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsProcessesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsProcessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
