import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopStrategyPage } from "./strategy";

describe("OopStrategyPage", () => {
  let component: OopStrategyPage;
  let fixture: ComponentFixture<OopStrategyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopStrategyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopStrategyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
