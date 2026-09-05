import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaAsymptoticNotationPage } from "./asymptotic-notation";

describe("DsaAsymptoticNotationPage", () => {
  let component: DsaAsymptoticNotationPage;
  let fixture: ComponentFixture<DsaAsymptoticNotationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaAsymptoticNotationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaAsymptoticNotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
