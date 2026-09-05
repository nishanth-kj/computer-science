import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaStackDsPage } from "./stack-ds";

describe("DsaStackDsPage", () => {
  let component: DsaStackDsPage;
  let fixture: ComponentFixture<DsaStackDsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaStackDsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaStackDsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
