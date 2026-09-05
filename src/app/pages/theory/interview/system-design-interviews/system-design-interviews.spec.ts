import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewSystemDesignInterviewsPage } from "./system-design-interviews";

describe("InterviewSystemDesignInterviewsPage", () => {
  let component: InterviewSystemDesignInterviewsPage;
  let fixture: ComponentFixture<InterviewSystemDesignInterviewsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewSystemDesignInterviewsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewSystemDesignInterviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
