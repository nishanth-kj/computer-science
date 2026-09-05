import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsStorageEnginesPage } from "./storage-engines";

describe("DbmsStorageEnginesPage", () => {
  let component: DbmsStorageEnginesPage;
  let fixture: ComponentFixture<DbmsStorageEnginesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsStorageEnginesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsStorageEnginesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
