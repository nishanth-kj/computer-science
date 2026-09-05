import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopObserverPage } from "./observer";

describe("OopObserverPage", () => {
  let component: OopObserverPage;
  let fixture: ComponentFixture<OopObserverPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopObserverPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopObserverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
