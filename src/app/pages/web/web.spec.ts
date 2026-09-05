import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { WebPage } from "./web";

describe("WebPage", () => {
  let component: WebPage;
  let fixture: ComponentFixture<WebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
