import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopRustPage } from "./rust";

describe("OopRustPage", () => {
  let component: OopRustPage;
  let fixture: ComponentFixture<OopRustPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopRustPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopRustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
