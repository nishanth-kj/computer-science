import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsMemoryManagementPage } from "./memory-management";

describe("OsMemoryManagementPage", () => {
  let component: OsMemoryManagementPage;
  let fixture: ComponentFixture<OsMemoryManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsMemoryManagementPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsMemoryManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
