import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignGoogleSearchPage } from "./google-search";

describe("SystemDesignGoogleSearchPage", () => {
  let component: SystemDesignGoogleSearchPage;
  let fixture: ComponentFixture<SystemDesignGoogleSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignGoogleSearchPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignGoogleSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
