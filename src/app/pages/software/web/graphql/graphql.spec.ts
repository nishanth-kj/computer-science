import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebGraphqlPage } from "./graphql";

describe("WebGraphqlPage", () => {
  let component: WebGraphqlPage;
  let fixture: ComponentFixture<WebGraphqlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebGraphqlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebGraphqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
