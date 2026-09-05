import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersInterpreterCmpPage } from "./interpreter-cmp";

describe("CompilersInterpreterCmpPage", () => {
  let component: CompilersInterpreterCmpPage;
  let fixture: ComponentFixture<CompilersInterpreterCmpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersInterpreterCmpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersInterpreterCmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
