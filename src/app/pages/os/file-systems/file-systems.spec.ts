import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsFileSystemsPage } from "./file-systems";

describe("OsFileSystemsPage", () => {
  let component: OsFileSystemsPage;
  let fixture: ComponentFixture<OsFileSystemsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsFileSystemsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsFileSystemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
