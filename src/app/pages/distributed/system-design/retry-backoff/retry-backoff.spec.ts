import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignRetryBackoffPage } from "./retry-backoff";

describe("SystemDesignRetryBackoffPage", () => {
  let component: SystemDesignRetryBackoffPage;
  let fixture: ComponentFixture<SystemDesignRetryBackoffPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignRetryBackoffPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignRetryBackoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
