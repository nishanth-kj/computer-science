import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsTracingPage } from "./tracing";

describe("DevopsTracingPage", () => {
  let component: DevopsTracingPage;
  let fixture: ComponentFixture<DevopsTracingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsTracingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsTracingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
