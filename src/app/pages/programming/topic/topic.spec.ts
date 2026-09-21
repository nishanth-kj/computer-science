import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ProgrammingTopicPage } from "./topic";

describe("ProgrammingTopicPage", () => {
  let component: ProgrammingTopicPage;
  let fixture: ComponentFixture<ProgrammingTopicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingTopicPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammingTopicPage);
    fixture.componentRef.setInput("slug", "variables");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("renders the topic", () => {
    expect(fixture.nativeElement.textContent).toContain("Variables");
  });
});
