import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathCombinatoricsPage } from "./combinatorics";

describe("DiscreteMathCombinatoricsPage", () => {
  let component: DiscreteMathCombinatoricsPage;
  let fixture: ComponentFixture<DiscreteMathCombinatoricsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathCombinatoricsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathCombinatoricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
