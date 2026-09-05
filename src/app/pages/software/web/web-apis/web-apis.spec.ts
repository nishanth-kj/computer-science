import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebWebApisPage } from "./web-apis";

describe("WebWebApisPage", () => {
  let component: WebWebApisPage;
  let fixture: ComponentFixture<WebWebApisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebWebApisPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebWebApisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
