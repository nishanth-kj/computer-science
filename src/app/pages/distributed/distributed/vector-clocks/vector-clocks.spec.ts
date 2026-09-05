import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedVectorClocksPage } from "./vector-clocks";

describe("DistributedVectorClocksPage", () => {
  let component: DistributedVectorClocksPage;
  let fixture: ComponentFixture<DistributedVectorClocksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedVectorClocksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedVectorClocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
