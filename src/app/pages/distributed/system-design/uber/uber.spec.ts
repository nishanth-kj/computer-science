import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignUberPage } from "./uber";

describe("SystemDesignUberPage", () => {
  let component: SystemDesignUberPage;
  let fixture: ComponentFixture<SystemDesignUberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignUberPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignUberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
