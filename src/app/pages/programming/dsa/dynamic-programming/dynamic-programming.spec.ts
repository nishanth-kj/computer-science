import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDynamicProgrammingPage } from "./dynamic-programming";

describe("DsaDynamicProgrammingPage", () => {
  let component: DsaDynamicProgrammingPage;
  let fixture: ComponentFixture<DsaDynamicProgrammingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDynamicProgrammingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDynamicProgrammingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
