import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathInductionPage } from "./induction";

describe("DiscreteMathInductionPage", () => {
  let component: DiscreteMathInductionPage;
  let fixture: ComponentFixture<DiscreteMathInductionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathInductionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathInductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
