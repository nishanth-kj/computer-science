import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsDeadlocksPage } from "./deadlocks";

describe("OsDeadlocksPage", () => {
  let component: OsDeadlocksPage;
  let fixture: ComponentFixture<OsDeadlocksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsDeadlocksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsDeadlocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
