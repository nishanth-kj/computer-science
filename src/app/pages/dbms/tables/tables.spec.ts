import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsTablesPage } from "./tables";

describe("DbmsTablesPage", () => {
  let component: DbmsTablesPage;
  let fixture: ComponentFixture<DbmsTablesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsTablesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsTablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
