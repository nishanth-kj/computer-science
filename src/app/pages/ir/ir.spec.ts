import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { IrPage } from "./ir";

describe("IrPage", () => {
  let component: IrPage;
  let fixture: ComponentFixture<IrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
