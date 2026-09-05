import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsGarbageCollectionPage } from "./garbage-collection";

describe("FundamentalsGarbageCollectionPage", () => {
  let component: FundamentalsGarbageCollectionPage;
  let fixture: ComponentFixture<FundamentalsGarbageCollectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsGarbageCollectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsGarbageCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
