import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaPrimPage } from "./prim";

describe("DsaPrimPage", () => {
  let component: DsaPrimPage;
  let fixture: ComponentFixture<DsaPrimPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaPrimPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaPrimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
