import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsTransactionsPage } from "./transactions";

describe("DbmsTransactionsPage", () => {
  let component: DbmsTransactionsPage;
  let fixture: ComponentFixture<DbmsTransactionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsTransactionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
