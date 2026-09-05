import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignScalabilityPage } from "./scalability";

describe("SystemDesignScalabilityPage", () => {
  let component: SystemDesignScalabilityPage;
  let fixture: ComponentFixture<SystemDesignScalabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignScalabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignScalabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
