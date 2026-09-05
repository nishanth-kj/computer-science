import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaStringsDsPage } from "./strings-ds";

describe("DsaStringsDsPage", () => {
  let component: DsaStringsDsPage;
  let fixture: ComponentFixture<DsaStringsDsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaStringsDsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaStringsDsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
