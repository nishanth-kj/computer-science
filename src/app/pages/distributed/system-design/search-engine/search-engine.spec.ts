import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignSearchEnginePage } from "./search-engine";

describe("SystemDesignSearchEnginePage", () => {
  let component: SystemDesignSearchEnginePage;
  let fixture: ComponentFixture<SystemDesignSearchEnginePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignSearchEnginePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignSearchEnginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
