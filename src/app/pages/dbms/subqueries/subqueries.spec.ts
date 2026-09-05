import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsSubqueriesPage } from "./subqueries";

describe("DbmsSubqueriesPage", () => {
  let component: DbmsSubqueriesPage;
  let fixture: ComponentFixture<DbmsSubqueriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsSubqueriesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsSubqueriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
