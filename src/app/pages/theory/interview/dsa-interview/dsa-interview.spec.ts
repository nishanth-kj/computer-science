import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewDsaInterviewPage } from "./dsa-interview";

describe("InterviewDsaInterviewPage", () => {
  let component: InterviewDsaInterviewPage;
  let fixture: ComponentFixture<InterviewDsaInterviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewDsaInterviewPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewDsaInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
