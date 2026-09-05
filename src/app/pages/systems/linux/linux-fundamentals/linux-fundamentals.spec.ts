import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxLinuxFundamentalsPage } from "./linux-fundamentals";

describe("LinuxLinuxFundamentalsPage", () => {
  let component: LinuxLinuxFundamentalsPage;
  let fixture: ComponentFixture<LinuxLinuxFundamentalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxLinuxFundamentalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxLinuxFundamentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
