import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignLoadBalancersPage } from "./load-balancers";

describe("SystemDesignLoadBalancersPage", () => {
  let component: SystemDesignLoadBalancersPage;
  let fixture: ComponentFixture<SystemDesignLoadBalancersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignLoadBalancersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignLoadBalancersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
