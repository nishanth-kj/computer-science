import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignUrlShortenerPage } from "./url-shortener";

describe("SystemDesignUrlShortenerPage", () => {
  let component: SystemDesignUrlShortenerPage;
  let fixture: ComponentFixture<SystemDesignUrlShortenerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignUrlShortenerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignUrlShortenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
