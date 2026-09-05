import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsKernelModePage } from "./kernel-mode";

describe("OsKernelModePage", () => {
  let component: OsKernelModePage;
  let fixture: ComponentFixture<OsKernelModePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsKernelModePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsKernelModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
