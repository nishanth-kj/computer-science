import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SupportPage } from "./support";

describe("SupportPage", () => {
  let component: SupportPage;
  let fixture: ComponentFixture<SupportPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(SupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
