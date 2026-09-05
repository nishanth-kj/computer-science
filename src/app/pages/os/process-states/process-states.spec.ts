import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsProcessStatesPage } from "./process-states";

describe("OsProcessStatesPage", () => {
  let component: OsProcessStatesPage;
  let fixture: ComponentFixture<OsProcessStatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsProcessStatesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsProcessStatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
