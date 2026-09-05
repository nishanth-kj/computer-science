import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaGraphsPage } from "./graphs";

describe("DsaGraphsPage", () => {
  let component: DsaGraphsPage;
  let fixture: ComponentFixture<DsaGraphsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaGraphsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaGraphsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
