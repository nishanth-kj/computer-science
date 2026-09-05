import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaKruskalPage } from "./kruskal";

describe("DsaKruskalPage", () => {
  let component: DsaKruskalPage;
  let fixture: ComponentFixture<DsaKruskalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaKruskalPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaKruskalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
