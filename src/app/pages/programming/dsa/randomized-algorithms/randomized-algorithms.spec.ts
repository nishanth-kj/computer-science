import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaRandomizedAlgorithmsPage } from "./randomized-algorithms";

describe("DsaRandomizedAlgorithmsPage", () => {
  let component: DsaRandomizedAlgorithmsPage;
  let fixture: ComponentFixture<DsaRandomizedAlgorithmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaRandomizedAlgorithmsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaRandomizedAlgorithmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
