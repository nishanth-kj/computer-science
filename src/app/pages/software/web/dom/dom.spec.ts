import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebDomPage } from "./dom";

describe("WebDomPage", () => {
  let component: WebDomPage;
  let fixture: ComponentFixture<WebDomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDomPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebDomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
