import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsViewsPage } from "./views";

describe("DbmsViewsPage", () => {
  let component: DbmsViewsPage;
  let fixture: ComponentFixture<DbmsViewsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsViewsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsViewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
