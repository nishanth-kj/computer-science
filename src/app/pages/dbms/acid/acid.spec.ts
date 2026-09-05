import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsAcidPage } from "./acid";

describe("DbmsAcidPage", () => {
  let component: DbmsAcidPage;
  let fixture: ComponentFixture<DbmsAcidPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsAcidPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsAcidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
