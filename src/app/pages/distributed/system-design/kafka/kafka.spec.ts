import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignKafkaPage } from "./kafka";

describe("SystemDesignKafkaPage", () => {
  let component: SystemDesignKafkaPage;
  let fixture: ComponentFixture<SystemDesignKafkaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignKafkaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignKafkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
