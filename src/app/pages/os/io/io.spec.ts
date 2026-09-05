import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsIoPage } from "./io";

describe("OsIoPage", () => {
  let component: OsIoPage;
  let fixture: ComponentFixture<OsIoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsIoPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsIoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
