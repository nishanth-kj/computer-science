import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SoftwareEngineeringScrumPage } from "./scrum";

describe("SoftwareEngineeringScrumPage", () => {
  let component: SoftwareEngineeringScrumPage;
  let fixture: ComponentFixture<SoftwareEngineeringScrumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEngineeringScrumPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringScrumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
