import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsIpcPage } from "./ipc";

describe("OsIpcPage", () => {
  let component: OsIpcPage;
  let fixture: ComponentFixture<OsIpcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsIpcPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsIpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
