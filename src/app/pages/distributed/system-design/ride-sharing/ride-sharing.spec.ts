import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignRideSharingPage } from "./ride-sharing";

describe("SystemDesignRideSharingPage", () => {
  let component: SystemDesignRideSharingPage;
  let fixture: ComponentFixture<SystemDesignRideSharingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignRideSharingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignRideSharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
