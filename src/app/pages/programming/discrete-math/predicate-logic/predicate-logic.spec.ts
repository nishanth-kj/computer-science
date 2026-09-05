import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathPredicateLogicPage } from "./predicate-logic";

describe("DiscreteMathPredicateLogicPage", () => {
  let component: DiscreteMathPredicateLogicPage;
  let fixture: ComponentFixture<DiscreteMathPredicateLogicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathPredicateLogicPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathPredicateLogicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
