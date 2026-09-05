import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrRankingPage } from "./ranking";

describe("IrRankingPage", () => {
  let component: IrRankingPage;
  let fixture: ComponentFixture<IrRankingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrRankingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
