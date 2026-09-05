import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsSqlPage } from "./sql";

describe("DbmsSqlPage", () => {
  let component: DbmsSqlPage;
  let fixture: ComponentFixture<DbmsSqlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsSqlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsSqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
