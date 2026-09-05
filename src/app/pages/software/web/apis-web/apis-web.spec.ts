import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebApisWebPage } from "./apis-web";

describe("WebApisWebPage", () => {
  let component: WebApisWebPage;
  let fixture: ComponentFixture<WebApisWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebApisWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebApisWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
