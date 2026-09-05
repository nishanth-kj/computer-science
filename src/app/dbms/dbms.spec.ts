import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { DbmsPage } from "./dbms";

describe("DbmsPage", () => {
  let component: DbmsPage;
  let fixture: ComponentFixture<DbmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
