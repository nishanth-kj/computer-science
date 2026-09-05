import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathPage } from "./discrete-math";

describe("DiscreteMathPage", () => {
  let component: DiscreteMathPage;
  let fixture: ComponentFixture<DiscreteMathPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
