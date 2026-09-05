import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebBrowserStoragePage } from "./browser-storage";

describe("WebBrowserStoragePage", () => {
  let component: WebBrowserStoragePage;
  let fixture: ComponentFixture<WebBrowserStoragePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebBrowserStoragePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebBrowserStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
