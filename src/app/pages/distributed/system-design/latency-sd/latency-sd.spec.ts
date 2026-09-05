import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignLatencySdPage } from "./latency-sd";

describe("SystemDesignLatencySdPage", () => {
  let component: SystemDesignLatencySdPage;
  let fixture: ComponentFixture<SystemDesignLatencySdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignLatencySdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignLatencySdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
