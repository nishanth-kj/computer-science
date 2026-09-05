import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxRedirectionPage } from "./redirection";

describe("LinuxRedirectionPage", () => {
  let component: LinuxRedirectionPage;
  let fixture: ComponentFixture<LinuxRedirectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxRedirectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxRedirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
