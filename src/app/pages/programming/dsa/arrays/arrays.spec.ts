import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaArraysPage } from "./arrays";

describe("DsaArraysPage", () => {
  let component: DsaArraysPage;
  let fixture: ComponentFixture<DsaArraysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaArraysPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaArraysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
