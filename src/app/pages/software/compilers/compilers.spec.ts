import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersPage } from "./compilers";

describe("CompilersPage", () => {
  let component: CompilersPage;
  let fixture: ComponentFixture<CompilersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
