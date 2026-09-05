import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopSingletonPage } from "./singleton";

describe("OopSingletonPage", () => {
  let component: OopSingletonPage;
  let fixture: ComponentFixture<OopSingletonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopSingletonPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopSingletonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
