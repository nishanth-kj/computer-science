import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiKnowledgeRepresentationPage } from "./knowledge-representation";

describe("AiKnowledgeRepresentationPage", () => {
  let component: AiKnowledgeRepresentationPage;
  let fixture: ComponentFixture<AiKnowledgeRepresentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiKnowledgeRepresentationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiKnowledgeRepresentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
