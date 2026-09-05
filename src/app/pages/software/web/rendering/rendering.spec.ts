import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebRenderingPage } from "./rendering";

describe("WebRenderingPage", () => {
  let component: WebRenderingPage;
  let fixture: ComponentFixture<WebRenderingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRenderingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebRenderingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
