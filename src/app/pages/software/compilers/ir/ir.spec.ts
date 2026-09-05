import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CompilersIrPage } from "./ir";

describe("CompilersIrPage", () => {
  let component: CompilersIrPage;
  let fixture: ComponentFixture<CompilersIrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilersIrPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CompilersIrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
