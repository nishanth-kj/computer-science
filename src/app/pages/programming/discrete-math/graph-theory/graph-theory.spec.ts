import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathGraphTheoryPage } from "./graph-theory";

describe("DiscreteMathGraphTheoryPage", () => {
  let component: DiscreteMathGraphTheoryPage;
  let fixture: ComponentFixture<DiscreteMathGraphTheoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathGraphTheoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathGraphTheoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
