import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsPageReplacementPage } from "./page-replacement";

describe("OsPageReplacementPage", () => {
  let component: OsPageReplacementPage;
  let fixture: ComponentFixture<OsPageReplacementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsPageReplacementPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsPageReplacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
