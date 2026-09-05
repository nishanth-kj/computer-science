import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaHashMapsPage } from "./hash-maps";

describe("DsaHashMapsPage", () => {
  let component: DsaHashMapsPage;
  let fixture: ComponentFixture<DsaHashMapsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaHashMapsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaHashMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
