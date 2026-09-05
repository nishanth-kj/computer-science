import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebAuthorizationPage } from "./authorization";

describe("WebAuthorizationPage", () => {
  let component: WebAuthorizationPage;
  let fixture: ComponentFixture<WebAuthorizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthorizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthorizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
