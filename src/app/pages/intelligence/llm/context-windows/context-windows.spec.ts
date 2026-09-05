import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmContextWindowsPage } from "./context-windows";

describe("LlmContextWindowsPage", () => {
  let component: LlmContextWindowsPage;
  let fixture: ComponentFixture<LlmContextWindowsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmContextWindowsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmContextWindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
