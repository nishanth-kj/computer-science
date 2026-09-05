import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsPrimaryKeysPage } from "./primary-keys";

describe("DbmsPrimaryKeysPage", () => {
  let component: DbmsPrimaryKeysPage;
  let fixture: ComponentFixture<DbmsPrimaryKeysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsPrimaryKeysPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsPrimaryKeysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
