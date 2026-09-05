import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersCodeGenerationPage } from "./code-generation";

describe("CompilersCodeGenerationPage", () => {
  let component: CompilersCodeGenerationPage;
  let fixture: ComponentFixture<CompilersCodeGenerationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersCodeGenerationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersCodeGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
