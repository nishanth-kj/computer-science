import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsQueryPlannersPage } from "./query-planners";

describe("DbmsQueryPlannersPage", () => {
  let component: DbmsQueryPlannersPage;
  let fixture: ComponentFixture<DbmsQueryPlannersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsQueryPlannersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsQueryPlannersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
