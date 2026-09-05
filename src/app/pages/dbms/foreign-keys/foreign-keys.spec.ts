import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsForeignKeysPage } from "./foreign-keys";

describe("DbmsForeignKeysPage", () => {
  let component: DbmsForeignKeysPage;
  let fixture: ComponentFixture<DbmsForeignKeysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsForeignKeysPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsForeignKeysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
