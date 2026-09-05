import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsPage } from "./devops";

describe("DevopsPage", () => {
  let component: DevopsPage;
  let fixture: ComponentFixture<DevopsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
