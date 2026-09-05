import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaFenwickTreesPage } from "./fenwick-trees";

describe("DsaFenwickTreesPage", () => {
  let component: DsaFenwickTreesPage;
  let fixture: ComponentFixture<DsaFenwickTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaFenwickTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaFenwickTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
