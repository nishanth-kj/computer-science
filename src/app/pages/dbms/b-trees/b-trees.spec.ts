import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsBTreesPage } from "./b-trees";

describe("DbmsBTreesPage", () => {
  let component: DbmsBTreesPage;
  let fixture: ComponentFixture<DbmsBTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsBTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsBTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
