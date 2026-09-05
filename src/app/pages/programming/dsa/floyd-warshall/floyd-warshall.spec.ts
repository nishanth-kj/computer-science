import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaFloydWarshallPage } from "./floyd-warshall";

describe("DsaFloydWarshallPage", () => {
  let component: DsaFloydWarshallPage;
  let fixture: ComponentFixture<DsaFloydWarshallPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaFloydWarshallPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaFloydWarshallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
