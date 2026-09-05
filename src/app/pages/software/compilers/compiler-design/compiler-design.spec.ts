import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersCompilerDesignPage } from "./compiler-design";

describe("CompilersCompilerDesignPage", () => {
  let component: CompilersCompilerDesignPage;
  let fixture: ComponentFixture<CompilersCompilerDesignPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersCompilerDesignPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersCompilerDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
