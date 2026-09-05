import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaSearchingPage } from "./searching";

describe("DsaSearchingPage", () => {
  let component: DsaSearchingPage;
  let fixture: ComponentFixture<DsaSearchingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaSearchingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaSearchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
