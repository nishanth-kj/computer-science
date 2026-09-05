import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathRecurrenceRelationsPage } from "./recurrence-relations";

describe("DiscreteMathRecurrenceRelationsPage", () => {
  let component: DiscreteMathRecurrenceRelationsPage;
  let fixture: ComponentFixture<DiscreteMathRecurrenceRelationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathRecurrenceRelationsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathRecurrenceRelationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
