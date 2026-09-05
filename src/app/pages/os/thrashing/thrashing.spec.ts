import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsThrashingPage } from "./thrashing";

describe("OsThrashingPage", () => {
  let component: OsThrashingPage;
  let fixture: ComponentFixture<OsThrashingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsThrashingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsThrashingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
