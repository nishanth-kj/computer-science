import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewInterviewGuidePage } from "./interview-guide";

describe("InterviewInterviewGuidePage", () => {
  let component: InterviewInterviewGuidePage;
  let fixture: ComponentFixture<InterviewInterviewGuidePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewInterviewGuidePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewInterviewGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
