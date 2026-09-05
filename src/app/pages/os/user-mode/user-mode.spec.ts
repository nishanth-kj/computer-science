import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsUserModePage } from "./user-mode";

describe("OsUserModePage", () => {
  let component: OsUserModePage;
  let fixture: ComponentFixture<OsUserModePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsUserModePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsUserModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
