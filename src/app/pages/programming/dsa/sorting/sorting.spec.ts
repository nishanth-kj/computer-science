import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaSortingPage } from "./sorting";

describe("DsaSortingPage", () => {
  let component: DsaSortingPage;
  let fixture: ComponentFixture<DsaSortingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaSortingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaSortingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
