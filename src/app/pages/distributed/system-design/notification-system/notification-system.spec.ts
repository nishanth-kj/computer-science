import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignNotificationSystemPage } from "./notification-system";

describe("SystemDesignNotificationSystemPage", () => {
  let component: SystemDesignNotificationSystemPage;
  let fixture: ComponentFixture<SystemDesignNotificationSystemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignNotificationSystemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignNotificationSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
