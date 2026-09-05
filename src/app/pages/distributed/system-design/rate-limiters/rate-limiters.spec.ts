import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignRateLimitersPage } from "./rate-limiters";

describe("SystemDesignRateLimitersPage", () => {
  let component: SystemDesignRateLimitersPage;
  let fixture: ComponentFixture<SystemDesignRateLimitersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignRateLimitersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignRateLimitersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
