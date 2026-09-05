import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AiPage } from "./ai";

describe("AiPage", () => {
  let component: AiPage;
  let fixture: ComponentFixture<AiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(AiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
