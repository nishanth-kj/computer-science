import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopCouplingPage } from "./coupling";

describe("OopCouplingPage", () => {
  let component: OopCouplingPage;
  let fixture: ComponentFixture<OopCouplingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopCouplingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopCouplingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
