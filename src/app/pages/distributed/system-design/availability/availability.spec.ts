import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignAvailabilityPage } from "./availability";

describe("SystemDesignAvailabilityPage", () => {
  let component: SystemDesignAvailabilityPage;
  let fixture: ComponentFixture<SystemDesignAvailabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignAvailabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignAvailabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
