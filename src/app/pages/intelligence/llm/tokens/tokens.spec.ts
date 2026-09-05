import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmTokensPage } from "./tokens";

describe("LlmTokensPage", () => {
  let component: LlmTokensPage;
  let fixture: ComponentFixture<LlmTokensPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmTokensPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmTokensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
