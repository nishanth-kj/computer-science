import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBacktrackingPage } from "./backtracking";

describe("DsaBacktrackingPage", () => {
  let component: DsaBacktrackingPage;
  let fixture: ComponentFixture<DsaBacktrackingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBacktrackingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBacktrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
