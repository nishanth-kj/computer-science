import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileAndroidPage } from "./android";

describe("MobileAndroidPage", () => {
  let component: MobileAndroidPage;
  let fixture: ComponentFixture<MobileAndroidPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAndroidPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAndroidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
