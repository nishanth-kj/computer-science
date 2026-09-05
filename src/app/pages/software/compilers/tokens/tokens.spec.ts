import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersTokensPage } from "./tokens";

describe("CompilersTokensPage", () => {
  let component: CompilersTokensPage;
  let fixture: ComponentFixture<CompilersTokensPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersTokensPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersTokensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
