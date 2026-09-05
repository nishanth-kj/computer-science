import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { SystemDesignPage } from "./system-design";

describe("SystemDesignPage", () => {
  let component: SystemDesignPage;
  let fixture: ComponentFixture<SystemDesignPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
