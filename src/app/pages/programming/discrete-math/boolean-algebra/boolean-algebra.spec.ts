import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathBooleanAlgebraPage } from "./boolean-algebra";

describe("DiscreteMathBooleanAlgebraPage", () => {
  let component: DiscreteMathBooleanAlgebraPage;
  let fixture: ComponentFixture<DiscreteMathBooleanAlgebraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathBooleanAlgebraPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathBooleanAlgebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
