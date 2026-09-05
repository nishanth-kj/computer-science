import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedConsistencyModelsPage } from "./consistency-models";

describe("DistributedConsistencyModelsPage", () => {
  let component: DistributedConsistencyModelsPage;
  let fixture: ComponentFixture<DistributedConsistencyModelsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedConsistencyModelsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedConsistencyModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
