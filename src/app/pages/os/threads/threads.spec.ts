import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsThreadsPage } from "./threads";

describe("OsThreadsPage", () => {
  let component: OsThreadsPage;
  let fixture: ComponentFixture<OsThreadsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsThreadsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsThreadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
