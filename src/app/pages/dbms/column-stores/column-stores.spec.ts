import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsColumnStoresPage } from "./column-stores";

describe("DbmsColumnStoresPage", () => {
  let component: DbmsColumnStoresPage;
  let fixture: ComponentFixture<DbmsColumnStoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsColumnStoresPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsColumnStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
