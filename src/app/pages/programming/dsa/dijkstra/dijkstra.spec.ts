import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDijkstraPage } from "./dijkstra";

describe("DsaDijkstraPage", () => {
  let component: DsaDijkstraPage;
  let fixture: ComponentFixture<DsaDijkstraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDijkstraPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDijkstraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
