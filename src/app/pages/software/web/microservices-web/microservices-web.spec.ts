import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebMicroservicesWebPage } from "./microservices-web";

describe("WebMicroservicesWebPage", () => {
  let component: WebMicroservicesWebPage;
  let fixture: ComponentFixture<WebMicroservicesWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebMicroservicesWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebMicroservicesWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
