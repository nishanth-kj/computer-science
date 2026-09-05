import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsKeyValuePage } from "./key-value";

describe("DbmsKeyValuePage", () => {
  let component: DbmsKeyValuePage;
  let fixture: ComponentFixture<DbmsKeyValuePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsKeyValuePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsKeyValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
