import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsForkPage } from "./fork";

describe("OsForkPage", () => {
  let component: OsForkPage;
  let fixture: ComponentFixture<OsForkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsForkPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsForkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
