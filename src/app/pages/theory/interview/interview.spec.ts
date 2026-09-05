import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../pages/page-spec";
import { InterviewPage } from "./interview";

describe("InterviewPage", () => {
  let component: InterviewPage;
  let fixture: ComponentFixture<InterviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
