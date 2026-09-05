import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsTlbPage } from "./tlb";

describe("OsTlbPage", () => {
  let component: OsTlbPage;
  let fixture: ComponentFixture<OsTlbPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsTlbPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsTlbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
