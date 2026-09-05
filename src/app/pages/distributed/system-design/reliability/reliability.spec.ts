import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignReliabilityPage } from "./reliability";

describe("SystemDesignReliabilityPage", () => {
  let component: SystemDesignReliabilityPage;
  let fixture: ComponentFixture<SystemDesignReliabilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignReliabilityPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignReliabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
