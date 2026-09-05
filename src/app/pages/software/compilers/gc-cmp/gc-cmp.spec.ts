import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersGcCmpPage } from "./gc-cmp";

describe("CompilersGcCmpPage", () => {
  let component: CompilersGcCmpPage;
  let fixture: ComponentFixture<CompilersGcCmpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersGcCmpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersGcCmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
