import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureBranchPredictionPage } from "./branch-prediction";

describe("ArchitectureBranchPredictionPage", () => {
  let component: ArchitectureBranchPredictionPage;
  let fixture: ComponentFixture<ArchitectureBranchPredictionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureBranchPredictionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureBranchPredictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
