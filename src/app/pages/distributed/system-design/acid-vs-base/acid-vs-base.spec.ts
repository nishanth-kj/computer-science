import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignAcidVsBasePage } from "./acid-vs-base";

describe("SystemDesignAcidVsBasePage", () => {
  let component: SystemDesignAcidVsBasePage;
  let fixture: ComponentFixture<SystemDesignAcidVsBasePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignAcidVsBasePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignAcidVsBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
