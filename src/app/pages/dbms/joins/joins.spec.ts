import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsJoinsPage } from "./joins";

describe("DbmsJoinsPage", () => {
  let component: DbmsJoinsPage;
  let fixture: ComponentFixture<DbmsJoinsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsJoinsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsJoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
