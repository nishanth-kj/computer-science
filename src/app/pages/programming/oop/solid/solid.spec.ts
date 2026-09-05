import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopSolidPage } from "./solid";

describe("OopSolidPage", () => {
  let component: OopSolidPage;
  let fixture: ComponentFixture<OopSolidPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopSolidPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopSolidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
