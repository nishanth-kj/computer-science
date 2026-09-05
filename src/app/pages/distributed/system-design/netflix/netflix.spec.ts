import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignNetflixPage } from "./netflix";

describe("SystemDesignNetflixPage", () => {
  let component: SystemDesignNetflixPage;
  let fixture: ComponentFixture<SystemDesignNetflixPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignNetflixPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignNetflixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
