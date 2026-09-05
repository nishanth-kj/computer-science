import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ResearchExperimentsPage } from "./experiments";

describe("ResearchExperimentsPage", () => {
  let component: ResearchExperimentsPage;
  let fixture: ComponentFixture<ResearchExperimentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchExperimentsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchExperimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
