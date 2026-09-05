import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathPropositionalLogicPage } from "./propositional-logic";

describe("DiscreteMathPropositionalLogicPage", () => {
  let component: DiscreteMathPropositionalLogicPage;
  let fixture: ComponentFixture<DiscreteMathPropositionalLogicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathPropositionalLogicPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathPropositionalLogicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
