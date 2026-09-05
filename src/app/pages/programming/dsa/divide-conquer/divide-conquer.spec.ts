import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDivideConquerPage } from "./divide-conquer";

describe("DsaDivideConquerPage", () => {
  let component: DsaDivideConquerPage;
  let fixture: ComponentFixture<DsaDivideConquerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDivideConquerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDivideConquerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
