import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebOauthPage } from "./oauth";

describe("WebOauthPage", () => {
  let component: WebOauthPage;
  let fixture: ComponentFixture<WebOauthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebOauthPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebOauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
