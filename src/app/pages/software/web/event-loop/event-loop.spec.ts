import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebEventLoopPage } from "./event-loop";

describe("WebEventLoopPage", () => {
  let component: WebEventLoopPage;
  let fixture: ComponentFixture<WebEventLoopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebEventLoopPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebEventLoopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
