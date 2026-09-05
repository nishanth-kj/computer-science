import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringCleanCodePage } from "./clean-code";

describe("SoftwareEngineeringCleanCodePage", () => {
  let component: SoftwareEngineeringCleanCodePage;
  let fixture: ComponentFixture<SoftwareEngineeringCleanCodePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringCleanCodePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringCleanCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
