import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiSearchAiPage } from "./search-ai";

describe("AiSearchAiPage", () => {
  let component: AiSearchAiPage;
  let fixture: ComponentFixture<AiSearchAiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSearchAiPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiSearchAiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
