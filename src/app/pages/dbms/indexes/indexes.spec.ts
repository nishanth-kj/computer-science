import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsIndexesPage } from "./indexes";

describe("DbmsIndexesPage", () => {
  let component: DbmsIndexesPage;
  let fixture: ComponentFixture<DbmsIndexesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsIndexesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsIndexesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
