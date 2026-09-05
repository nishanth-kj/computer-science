import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsWhatIsOsPage } from "./what-is-os";

describe("OsWhatIsOsPage", () => {
  let component: OsWhatIsOsPage;
  let fixture: ComponentFixture<OsWhatIsOsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsWhatIsOsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsWhatIsOsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
