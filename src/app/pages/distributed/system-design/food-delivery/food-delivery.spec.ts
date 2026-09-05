import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignFoodDeliveryPage } from "./food-delivery";

describe("SystemDesignFoodDeliveryPage", () => {
  let component: SystemDesignFoodDeliveryPage;
  let fixture: ComponentFixture<SystemDesignFoodDeliveryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignFoodDeliveryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignFoodDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
