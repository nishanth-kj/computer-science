import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebAuthenticationPage } from "./authentication";

describe("WebAuthenticationPage", () => {
  let component: WebAuthenticationPage;
  let fixture: ComponentFixture<WebAuthenticationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthenticationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthenticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
