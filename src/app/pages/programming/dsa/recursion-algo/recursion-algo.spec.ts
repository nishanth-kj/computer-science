import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaRecursionAlgoPage } from "./recursion-algo";

describe("DsaRecursionAlgoPage", () => {
  let component: DsaRecursionAlgoPage;
  let fixture: ComponentFixture<DsaRecursionAlgoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaRecursionAlgoPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaRecursionAlgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
