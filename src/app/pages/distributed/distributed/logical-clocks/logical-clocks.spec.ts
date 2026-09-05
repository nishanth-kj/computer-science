import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedLogicalClocksPage } from "./logical-clocks";

describe("DistributedLogicalClocksPage", () => {
  let component: DistributedLogicalClocksPage;
  let fixture: ComponentFixture<DistributedLogicalClocksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedLogicalClocksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedLogicalClocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
