import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaHeapsPage } from "./heaps";

describe("DsaHeapsPage", () => {
  let component: DsaHeapsPage;
  let fixture: ComponentFixture<DsaHeapsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaHeapsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaHeapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
