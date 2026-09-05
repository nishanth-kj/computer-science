import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaTopologicalSortPage } from "./topological-sort";

describe("DsaTopologicalSortPage", () => {
  let component: DsaTopologicalSortPage;
  let fixture: ComponentFixture<DsaTopologicalSortPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaTopologicalSortPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaTopologicalSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
