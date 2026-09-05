import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsWalPage } from "./wal";

describe("DbmsWalPage", () => {
  let component: DbmsWalPage;
  let fixture: ComponentFixture<DbmsWalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsWalPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsWalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
