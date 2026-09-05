import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsGraphDatabasesPage } from "./graph-databases";

describe("DbmsGraphDatabasesPage", () => {
  let component: DbmsGraphDatabasesPage;
  let fixture: ComponentFixture<DbmsGraphDatabasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsGraphDatabasesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsGraphDatabasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
