import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersAstPage } from "./ast";

describe("CompilersAstPage", () => {
  let component: CompilersAstPage;
  let fixture: ComponentFixture<CompilersAstPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersAstPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersAstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
