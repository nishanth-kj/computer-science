import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { WebRestPage } from "./rest";

describe("WebRestPage", () => {
  let component: WebRestPage;
  let fixture: ComponentFixture<WebRestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRestPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(WebRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
