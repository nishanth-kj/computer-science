import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaTwoPointersPage } from "./two-pointers";

describe("DsaTwoPointersPage", () => {
  let component: DsaTwoPointersPage;
  let fixture: ComponentFixture<DsaTwoPointersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaTwoPointersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaTwoPointersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
