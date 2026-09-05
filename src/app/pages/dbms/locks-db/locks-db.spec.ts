import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsLocksDbPage } from "./locks-db";

describe("DbmsLocksDbPage", () => {
  let component: DbmsLocksDbPage;
  let fixture: ComponentFixture<DbmsLocksDbPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsLocksDbPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsLocksDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
