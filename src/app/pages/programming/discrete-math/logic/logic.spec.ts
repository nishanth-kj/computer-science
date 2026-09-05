import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathLogicPage } from "./logic";

describe("DiscreteMathLogicPage", () => {
  let component: DiscreteMathLogicPage;
  let fixture: ComponentFixture<DiscreteMathLogicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathLogicPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathLogicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
