import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CybersecurityTlsPage } from "./tls";

describe("CybersecurityTlsPage", () => {
  let component: CybersecurityTlsPage;
  let fixture: ComponentFixture<CybersecurityTlsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityTlsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CybersecurityTlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
