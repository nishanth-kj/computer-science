import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsSjfPage } from "./sjf";

describe("OsSjfPage", () => {
  let component: OsSjfPage;
  let fixture: ComponentFixture<OsSjfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsSjfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsSjfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
