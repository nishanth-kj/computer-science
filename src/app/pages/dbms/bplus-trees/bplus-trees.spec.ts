import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsBplusTreesPage } from "./bplus-trees";

describe("DbmsBplusTreesPage", () => {
  let component: DbmsBplusTreesPage;
  let fixture: ComponentFixture<DbmsBplusTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsBplusTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsBplusTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
