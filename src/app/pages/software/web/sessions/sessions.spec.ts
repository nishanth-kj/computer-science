import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebSessionsPage } from "./sessions";

describe("WebSessionsPage", () => {
  let component: WebSessionsPage;
  let fixture: ComponentFixture<WebSessionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSessionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebSessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
