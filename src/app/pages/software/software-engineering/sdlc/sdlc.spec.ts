import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringSdlcPage } from "./sdlc";

describe("SoftwareEngineeringSdlcPage", () => {
  let component: SoftwareEngineeringSdlcPage;
  let fixture: ComponentFixture<SoftwareEngineeringSdlcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringSdlcPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringSdlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
