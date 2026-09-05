import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignAmazonPage } from "./amazon";

describe("SystemDesignAmazonPage", () => {
  let component: SystemDesignAmazonPage;
  let fixture: ComponentFixture<SystemDesignAmazonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignAmazonPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignAmazonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
