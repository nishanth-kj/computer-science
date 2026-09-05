import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsConstraintsPage } from "./constraints";

describe("DbmsConstraintsPage", () => {
  let component: DbmsConstraintsPage;
  let fixture: ComponentFixture<DbmsConstraintsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsConstraintsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsConstraintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
