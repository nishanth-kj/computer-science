import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignCapTheoremPage } from "./cap-theorem";

describe("SystemDesignCapTheoremPage", () => {
  let component: SystemDesignCapTheoremPage;
  let fixture: ComponentFixture<SystemDesignCapTheoremPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignCapTheoremPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignCapTheoremPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
