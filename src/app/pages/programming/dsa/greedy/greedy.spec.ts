import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaGreedyPage } from "./greedy";

describe("DsaGreedyPage", () => {
  let component: DsaGreedyPage;
  let fixture: ComponentFixture<DsaGreedyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaGreedyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaGreedyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
