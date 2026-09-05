import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { OsPage } from "./os";

describe("OsPage", () => {
  let component: OsPage;
  let fixture: ComponentFixture<OsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
