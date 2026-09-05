import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersParserPage } from "./parser";

describe("CompilersParserPage", () => {
  let component: CompilersParserPage;
  let fixture: ComponentFixture<CompilersParserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersParserPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersParserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
