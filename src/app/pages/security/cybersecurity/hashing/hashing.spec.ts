import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityHashingPage } from "./hashing";

describe("CybersecurityHashingPage", () => {
  let component: CybersecurityHashingPage;
  let fixture: ComponentFixture<CybersecurityHashingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityHashingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityHashingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
