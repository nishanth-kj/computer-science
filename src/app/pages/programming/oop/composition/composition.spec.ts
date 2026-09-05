import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopCompositionPage } from "./composition";

describe("OopCompositionPage", () => {
  let component: OopCompositionPage;
  let fixture: ComponentFixture<OopCompositionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopCompositionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopCompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
