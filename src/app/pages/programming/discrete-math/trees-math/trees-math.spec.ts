import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathTreesMathPage } from "./trees-math";

describe("DiscreteMathTreesMathPage", () => {
  let component: DiscreteMathTreesMathPage;
  let fixture: ComponentFixture<DiscreteMathTreesMathPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathTreesMathPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathTreesMathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
