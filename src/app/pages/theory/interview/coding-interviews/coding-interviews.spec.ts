import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewCodingInterviewsPage } from "./coding-interviews";

describe("InterviewCodingInterviewsPage", () => {
  let component: InterviewCodingInterviewsPage;
  let fixture: ComponentFixture<InterviewCodingInterviewsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCodingInterviewsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewCodingInterviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
