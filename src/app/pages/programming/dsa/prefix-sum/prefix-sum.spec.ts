import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaPrefixSumPage } from "./prefix-sum";

describe("DsaPrefixSumPage", () => {
  let component: DsaPrefixSumPage;
  let fixture: ComponentFixture<DsaPrefixSumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaPrefixSumPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaPrefixSumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
