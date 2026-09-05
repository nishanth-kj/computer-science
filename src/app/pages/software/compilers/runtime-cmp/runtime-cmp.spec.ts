import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersRuntimeCmpPage } from "./runtime-cmp";

describe("CompilersRuntimeCmpPage", () => {
  let component: CompilersRuntimeCmpPage;
  let fixture: ComponentFixture<CompilersRuntimeCmpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersRuntimeCmpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersRuntimeCmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
