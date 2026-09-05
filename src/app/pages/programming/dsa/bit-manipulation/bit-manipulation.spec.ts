import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBitManipulationPage } from "./bit-manipulation";

describe("DsaBitManipulationPage", () => {
  let component: DsaBitManipulationPage;
  let fixture: ComponentFixture<DsaBitManipulationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBitManipulationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBitManipulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
