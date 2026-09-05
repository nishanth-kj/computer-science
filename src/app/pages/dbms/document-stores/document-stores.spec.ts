import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsDocumentStoresPage } from "./document-stores";

describe("DbmsDocumentStoresPage", () => {
  let component: DbmsDocumentStoresPage;
  let fixture: ComponentFixture<DbmsDocumentStoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsDocumentStoresPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsDocumentStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
