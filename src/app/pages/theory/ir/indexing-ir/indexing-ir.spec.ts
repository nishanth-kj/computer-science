import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrIndexingIrPage } from "./indexing-ir";

describe("IrIndexingIrPage", () => {
  let component: IrIndexingIrPage;
  let fixture: ComponentFixture<IrIndexingIrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrIndexingIrPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrIndexingIrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
