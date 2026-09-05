import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsLruPage } from "./lru";

describe("OsLruPage", () => {
  let component: OsLruPage;
  let fixture: ComponentFixture<OsLruPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsLruPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsLruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
