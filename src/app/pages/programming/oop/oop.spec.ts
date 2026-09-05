import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopPage } from "./oop";

describe("OopPage", () => {
  let component: OopPage;
  let fixture: ComponentFixture<OopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
