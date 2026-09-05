import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsContextSwitchingPage } from "./context-switching";

describe("OsContextSwitchingPage", () => {
  let component: OsContextSwitchingPage;
  let fixture: ComponentFixture<OsContextSwitchingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsContextSwitchingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsContextSwitchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
