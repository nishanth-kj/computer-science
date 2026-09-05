import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebJwtPage } from "./jwt";

describe("WebJwtPage", () => {
  let component: WebJwtPage;
  let fixture: ComponentFixture<WebJwtPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebJwtPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebJwtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
