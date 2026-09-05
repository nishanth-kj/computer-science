import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsBcnfPage } from "./bcnf";

describe("DbmsBcnfPage", () => {
  let component: DbmsBcnfPage;
  let fixture: ComponentFixture<DbmsBcnfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsBcnfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsBcnfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
