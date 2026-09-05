import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaHashTablesPage } from "./hash-tables";

describe("DsaHashTablesPage", () => {
  let component: DsaHashTablesPage;
  let fixture: ComponentFixture<DsaHashTablesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaHashTablesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaHashTablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
