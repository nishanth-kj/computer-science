import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewSystemsInterviewPage } from "./systems-interview";

describe("InterviewSystemsInterviewPage", () => {
  let component: InterviewSystemsInterviewPage;
  let fixture: ComponentFixture<InterviewSystemsInterviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewSystemsInterviewPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewSystemsInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
