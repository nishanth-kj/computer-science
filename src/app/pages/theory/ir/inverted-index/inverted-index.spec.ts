import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrInvertedIndexPage } from "./inverted-index";

describe("IrInvertedIndexPage", () => {
  let component: IrInvertedIndexPage;
  let fixture: ComponentFixture<IrInvertedIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrInvertedIndexPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrInvertedIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
