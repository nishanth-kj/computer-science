import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDsuPage } from "./dsu";

describe("DsaDsuPage", () => {
  let component: DsaDsuPage;
  let fixture: ComponentFixture<DsaDsuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDsuPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
