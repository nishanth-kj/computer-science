import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopClassesPage } from "./classes";

describe("OopClassesPage", () => {
  let component: OopClassesPage;
  let fixture: ComponentFixture<OopClassesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopClassesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
