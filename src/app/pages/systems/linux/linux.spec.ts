import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxPage } from "./linux";

describe("LinuxPage", () => {
  let component: LinuxPage;
  let fixture: ComponentFixture<LinuxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
