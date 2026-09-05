import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { InterviewBehavioralPage } from "./behavioral";

describe("InterviewBehavioralPage", () => {
  let component: InterviewBehavioralPage;
  let fixture: ComponentFixture<InterviewBehavioralPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewBehavioralPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewBehavioralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
