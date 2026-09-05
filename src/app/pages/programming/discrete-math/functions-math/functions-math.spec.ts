import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathFunctionsMathPage } from "./functions-math";

describe("DiscreteMathFunctionsMathPage", () => {
  let component: DiscreteMathFunctionsMathPage;
  let fixture: ComponentFixture<DiscreteMathFunctionsMathPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathFunctionsMathPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathFunctionsMathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
