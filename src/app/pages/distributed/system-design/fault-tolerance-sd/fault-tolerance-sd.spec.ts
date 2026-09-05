import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignFaultToleranceSdPage } from "./fault-tolerance-sd";

describe("SystemDesignFaultToleranceSdPage", () => {
  let component: SystemDesignFaultToleranceSdPage;
  let fixture: ComponentFixture<SystemDesignFaultToleranceSdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignFaultToleranceSdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignFaultToleranceSdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
