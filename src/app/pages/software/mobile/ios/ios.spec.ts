import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileIosPage } from "./ios";

describe("MobileIosPage", () => {
  let component: MobileIosPage;
  let fixture: ComponentFixture<MobileIosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileIosPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileIosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
