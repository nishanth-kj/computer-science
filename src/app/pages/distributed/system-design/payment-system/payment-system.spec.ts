import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignPaymentSystemPage } from "./payment-system";

describe("SystemDesignPaymentSystemPage", () => {
  let component: SystemDesignPaymentSystemPage;
  let fixture: ComponentFixture<SystemDesignPaymentSystemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignPaymentSystemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignPaymentSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
