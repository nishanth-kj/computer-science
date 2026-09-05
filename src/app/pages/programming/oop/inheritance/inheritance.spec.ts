import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopInheritancePage } from "./inheritance";

describe("OopInheritancePage", () => {
  let component: OopInheritancePage;
  let fixture: ComponentFixture<OopInheritancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopInheritancePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopInheritancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
