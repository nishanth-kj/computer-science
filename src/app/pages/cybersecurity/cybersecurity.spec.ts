import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { CybersecurityPage } from "./cybersecurity";

describe("CybersecurityPage", () => {
  let component: CybersecurityPage;
  let fixture: ComponentFixture<CybersecurityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
