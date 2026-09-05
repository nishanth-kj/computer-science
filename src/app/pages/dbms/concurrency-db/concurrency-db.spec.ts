import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsConcurrencyDbPage } from "./concurrency-db";

describe("DbmsConcurrencyDbPage", () => {
  let component: DbmsConcurrencyDbPage;
  let fixture: ComponentFixture<DbmsConcurrencyDbPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsConcurrencyDbPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsConcurrencyDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
