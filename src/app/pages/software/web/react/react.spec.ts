import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebReactPage } from "./react";

describe("WebReactPage", () => {
  let component: WebReactPage;
  let fixture: ComponentFixture<WebReactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebReactPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebReactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
