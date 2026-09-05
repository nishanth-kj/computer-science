import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopAdapterPage } from "./adapter";

describe("OopAdapterPage", () => {
  let component: OopAdapterPage;
  let fixture: ComponentFixture<OopAdapterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopAdapterPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopAdapterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
