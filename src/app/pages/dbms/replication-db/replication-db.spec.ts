import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsReplicationDbPage } from "./replication-db";

describe("DbmsReplicationDbPage", () => {
  let component: DbmsReplicationDbPage;
  let fixture: ComponentFixture<DbmsReplicationDbPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsReplicationDbPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsReplicationDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
