import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsInterruptsOsPage } from "./interrupts-os";

describe("OsInterruptsOsPage", () => {
  let component: OsInterruptsOsPage;
  let fixture: ComponentFixture<OsInterruptsOsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsInterruptsOsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsInterruptsOsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
