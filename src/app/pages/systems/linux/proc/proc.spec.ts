import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxProcPage } from "./proc";

describe("LinuxProcPage", () => {
  let component: LinuxProcPage;
  let fixture: ComponentFixture<LinuxProcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxProcPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxProcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
