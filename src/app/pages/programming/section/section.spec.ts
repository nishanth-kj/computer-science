import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ProgrammingSectionPage } from "./section";

describe("ProgrammingSectionPage", () => {
  let component: ProgrammingSectionPage;
  let fixture: ComponentFixture<ProgrammingSectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingSectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammingSectionPage);
    fixture.componentRef.setInput("id", "dsa");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("renders the topics of the section", () => {
    expect(fixture.nativeElement.textContent).toContain("Dynamic Programming");
  });
});
