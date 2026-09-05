import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrSemanticSearchPage } from "./semantic-search";

describe("IrSemanticSearchPage", () => {
  let component: IrSemanticSearchPage;
  let fixture: ComponentFixture<IrSemanticSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrSemanticSearchPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrSemanticSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
