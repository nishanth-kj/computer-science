import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersLexerPage } from "./lexer";

describe("CompilersLexerPage", () => {
  let component: CompilersLexerPage;
  let fixture: ComponentFixture<CompilersLexerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersLexerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersLexerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
