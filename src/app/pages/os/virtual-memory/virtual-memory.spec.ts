import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsVirtualMemoryPage } from "./virtual-memory";

describe("OsVirtualMemoryPage", () => {
  let component: OsVirtualMemoryPage;
  let fixture: ComponentFixture<OsVirtualMemoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsVirtualMemoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsVirtualMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
