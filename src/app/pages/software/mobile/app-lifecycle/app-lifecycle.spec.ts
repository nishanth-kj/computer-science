import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileAppLifecyclePage } from "./app-lifecycle";

describe("MobileAppLifecyclePage", () => {
  let component: MobileAppLifecyclePage;
  let fixture: ComponentFixture<MobileAppLifecyclePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppLifecyclePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAppLifecyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
