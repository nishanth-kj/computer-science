import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignApiGatewaysPage } from "./api-gateways";

describe("SystemDesignApiGatewaysPage", () => {
  let component: SystemDesignApiGatewaysPage;
  let fixture: ComponentFixture<SystemDesignApiGatewaysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignApiGatewaysPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignApiGatewaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
