import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiAiFundamentalsPage } from "./ai-fundamentals";

describe("AiAiFundamentalsPage", () => {
  let component: AiAiFundamentalsPage;
  let fixture: ComponentFixture<AiAiFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAiFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiAiFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
