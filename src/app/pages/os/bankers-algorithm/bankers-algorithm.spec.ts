import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsBankersAlgorithmPage } from "./bankers-algorithm";

describe("OsBankersAlgorithmPage", () => {
  let component: OsBankersAlgorithmPage;
  let fixture: ComponentFixture<OsBankersAlgorithmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsBankersAlgorithmPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsBankersAlgorithmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
