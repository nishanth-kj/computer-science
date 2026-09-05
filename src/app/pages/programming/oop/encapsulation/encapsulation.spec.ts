import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopEncapsulationPage } from "./encapsulation";

describe("OopEncapsulationPage", () => {
  let component: OopEncapsulationPage;
  let fixture: ComponentFixture<OopEncapsulationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopEncapsulationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopEncapsulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
