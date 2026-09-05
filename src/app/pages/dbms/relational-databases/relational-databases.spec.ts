import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsRelationalDatabasesPage } from "./relational-databases";

describe("DbmsRelationalDatabasesPage", () => {
  let component: DbmsRelationalDatabasesPage;
  let fixture: ComponentFixture<DbmsRelationalDatabasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsRelationalDatabasesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsRelationalDatabasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
