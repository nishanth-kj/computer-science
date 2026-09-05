import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileLocalStorageMobilePage } from "./local-storage-mobile";

describe("MobileLocalStorageMobilePage", () => {
  let component: MobileLocalStorageMobilePage;
  let fixture: ComponentFixture<MobileLocalStorageMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileLocalStorageMobilePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileLocalStorageMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
