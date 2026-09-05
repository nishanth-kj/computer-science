import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsIsolationLevelsPage } from "./isolation-levels";

describe("DbmsIsolationLevelsPage", () => {
  let component: DbmsIsolationLevelsPage;
  let fixture: ComponentFixture<DbmsIsolationLevelsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsIsolationLevelsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsIsolationLevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
