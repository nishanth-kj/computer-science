import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { AboutPage } from "./about";

describe("AboutPage", () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
