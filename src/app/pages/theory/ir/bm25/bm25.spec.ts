import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrBm25Page } from "./bm25";

describe("IrBm25Page", () => {
  let component: IrBm25Page;
  let fixture: ComponentFixture<IrBm25Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrBm25Page],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrBm25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
