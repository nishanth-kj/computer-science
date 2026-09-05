import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignSearchEnginesSdPage } from "./search-engines-sd";

describe("SystemDesignSearchEnginesSdPage", () => {
  let component: SystemDesignSearchEnginesSdPage;
  let fixture: ComponentFixture<SystemDesignSearchEnginesSdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignSearchEnginesSdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignSearchEnginesSdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
