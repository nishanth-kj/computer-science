import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignCircuitBreakersPage } from "./circuit-breakers";

describe("SystemDesignCircuitBreakersPage", () => {
  let component: SystemDesignCircuitBreakersPage;
  let fixture: ComponentFixture<SystemDesignCircuitBreakersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignCircuitBreakersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignCircuitBreakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
