import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersTypeCheckingPage } from "./type-checking";

describe("CompilersTypeCheckingPage", () => {
  let component: CompilersTypeCheckingPage;
  let fixture: ComponentFixture<CompilersTypeCheckingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersTypeCheckingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersTypeCheckingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
