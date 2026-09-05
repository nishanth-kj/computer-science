import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { PrivacyPage } from "./privacy";

describe("PrivacyPage", () => {
  let component: PrivacyPage;
  let fixture: ComponentFixture<PrivacyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(PrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
