import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrHybridSearchPage } from "./hybrid-search";

describe("IrHybridSearchPage", () => {
  let component: IrHybridSearchPage;
  let fixture: ComponentFixture<IrHybridSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrHybridSearchPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrHybridSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
