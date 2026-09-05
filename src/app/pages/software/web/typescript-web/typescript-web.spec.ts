import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebTypescriptWebPage } from "./typescript-web";

describe("WebTypescriptWebPage", () => {
  let component: WebTypescriptWebPage;
  let fixture: ComponentFixture<WebTypescriptWebPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebTypescriptWebPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebTypescriptWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
