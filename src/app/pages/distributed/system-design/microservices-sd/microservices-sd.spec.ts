import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignMicroservicesSdPage } from "./microservices-sd";

describe("SystemDesignMicroservicesSdPage", () => {
  let component: SystemDesignMicroservicesSdPage;
  let fixture: ComponentFixture<SystemDesignMicroservicesSdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignMicroservicesSdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignMicroservicesSdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
