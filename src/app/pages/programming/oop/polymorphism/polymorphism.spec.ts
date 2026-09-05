import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopPolymorphismPage } from "./polymorphism";

describe("OopPolymorphismPage", () => {
  let component: OopPolymorphismPage;
  let fixture: ComponentFixture<OopPolymorphismPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopPolymorphismPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopPolymorphismPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
