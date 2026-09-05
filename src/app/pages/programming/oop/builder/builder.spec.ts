import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopBuilderPage } from "./builder";

describe("OopBuilderPage", () => {
  let component: OopBuilderPage;
  let fixture: ComponentFixture<OopBuilderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopBuilderPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
