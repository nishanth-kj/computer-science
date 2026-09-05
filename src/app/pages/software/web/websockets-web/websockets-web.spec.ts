import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebWebsocketsWebPage } from "./websockets-web";

describe("WebWebsocketsWebPage", () => {
  let component: WebWebsocketsWebPage;
  let fixture: ComponentFixture<WebWebsocketsWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebWebsocketsWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebWebsocketsWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
