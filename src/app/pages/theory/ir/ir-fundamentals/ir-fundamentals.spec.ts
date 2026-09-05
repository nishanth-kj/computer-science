import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrIrFundamentalsPage } from "./ir-fundamentals";

describe("IrIrFundamentalsPage", () => {
  let component: IrIrFundamentalsPage;
  let fixture: ComponentFixture<IrIrFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrIrFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrIrFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
