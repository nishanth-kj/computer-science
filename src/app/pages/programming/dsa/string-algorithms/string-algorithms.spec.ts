import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaStringAlgorithmsPage } from "./string-algorithms";

describe("DsaStringAlgorithmsPage", () => {
  let component: DsaStringAlgorithmsPage;
  let fixture: ComponentFixture<DsaStringAlgorithmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaStringAlgorithmsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaStringAlgorithmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
