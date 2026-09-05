import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityXssPage } from "./xss";

describe("CybersecurityXssPage", () => {
  let component: CybersecurityXssPage;
  let fixture: ComponentFixture<CybersecurityXssPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityXssPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityXssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
