import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopProxyPage } from "./proxy";

describe("OopProxyPage", () => {
  let component: OopProxyPage;
  let fixture: ComponentFixture<OopProxyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopProxyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopProxyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
