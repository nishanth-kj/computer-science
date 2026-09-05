import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityCiaTriadPage } from "./cia-triad";

describe("CybersecurityCiaTriadPage", () => {
  let component: CybersecurityCiaTriadPage;
  let fixture: ComponentFixture<CybersecurityCiaTriadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityCiaTriadPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityCiaTriadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
