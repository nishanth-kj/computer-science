import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ProgramPage } from "./program";

describe("ProgramPage", () => {
  let component: ProgramPage;
  let fixture: ComponentFixture<ProgramPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
