import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsDatabaseFundamentalsPage } from "./database-fundamentals";

describe("DbmsDatabaseFundamentalsPage", () => {
  let component: DbmsDatabaseFundamentalsPage;
  let fixture: ComponentFixture<DbmsDatabaseFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsDatabaseFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsDatabaseFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
