import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignGeoPage } from "./geo";

describe("SystemDesignGeoPage", () => {
  let component: SystemDesignGeoPage;
  let fixture: ComponentFixture<SystemDesignGeoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignGeoPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignGeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
