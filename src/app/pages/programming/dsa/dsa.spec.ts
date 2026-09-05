import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { DsaPage } from "./dsa";

describe("DsaPage", () => {
  let component: DsaPage;
  let fixture: ComponentFixture<DsaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
