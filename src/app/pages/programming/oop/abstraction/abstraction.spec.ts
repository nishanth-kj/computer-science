import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopAbstractionPage } from "./abstraction";

describe("OopAbstractionPage", () => {
  let component: OopAbstractionPage;
  let fixture: ComponentFixture<OopAbstractionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopAbstractionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopAbstractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
