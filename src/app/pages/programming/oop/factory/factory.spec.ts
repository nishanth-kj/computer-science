import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopFactoryPage } from "./factory";

describe("OopFactoryPage", () => {
  let component: OopFactoryPage;
  let fixture: ComponentFixture<OopFactoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopFactoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopFactoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
