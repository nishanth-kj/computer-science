import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileMobileNetworkingPage } from "./mobile-networking";

describe("MobileMobileNetworkingPage", () => {
  let component: MobileMobileNetworkingPage;
  let fixture: ComponentFixture<MobileMobileNetworkingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMobileNetworkingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileMobileNetworkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
